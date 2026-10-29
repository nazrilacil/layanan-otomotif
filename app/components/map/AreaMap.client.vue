<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { Map as LeafletMap, Marker as LeafletMarker } from 'leaflet'
import type { ServiceArea } from '~/types'
import { business } from '~/config/business' // 👈 Import business

const props = defineProps<{ areas: ServiceArea[]; selectedId: string | null }>()
const emit = defineEmits<{ select: [id: string] }>()

const el = ref<HTMLDivElement | null>(null)
const status = ref<'idle' | 'loading' | 'ready' | 'error'>('idle')
let map: LeafletMap | null = null
let L: typeof import('leaflet') | null = null
const markers = new Map<string, LeafletMarker>()
let businessMarker: LeafletMarker | null = null

// Default center menggunakan koordinat bengkel
const defaultCenter: [number, number] = business.coordinates 
  ? [business.coordinates.lat, business.coordinates.lng] 
  : [-7.68, 108.6]

function pinIcon(selected: boolean) {
  if (!L) return undefined
  const color = selected ? '#FFB400' : '#0B7A85'
  const size = selected ? 26 : 20
  return L.divIcon({
    className: 'lo-map-pin',
    html: `<span style="display:block;width:${size}px;height:${size}px;border-radius:50%;background:${color};border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.35)"></span>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  })
}

// 👇 Ikon khusus untuk bengkel
function businessIcon() {
  if (!L) return undefined
  return L.divIcon({
    className: 'lo-business-pin',
    html: `<div style="display:grid;place-items:center;width:36px;height:36px;background:#FFB400;border-radius:50%;border:3px solid #fff;box-shadow:0 4px 10px rgba(0,0,0,.4);">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B1400" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
    </div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  })
}

async function init() {
  if (!el.value) return
  status.value = 'loading'
  try {
    const leaflet = await import('leaflet')
    L = leaflet
    map = leaflet.map(el.value, {
      center: defaultCenter, // 👈 Pakai koordinat bengkel
      zoom: 13, // Zoom lebih dekat
      scrollWheelZoom: false,
    })
    leaflet
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      })
      .addTo(map)
    leaflet.control.scale({ imperial: false }).addTo(map)
    
    // 👇 Tambahkan marker bengkel
    const icon = businessIcon()
    if (icon && business.coordinates) {
      businessMarker = leaflet.marker([business.coordinates.lat, business.coordinates.lng], {
        icon,
        title: business.displayName,
        alt: 'Lokasi Bengkel',
        zIndexOffset: 1000, // Agar selalu di atas marker area
      })
      businessMarker.bindPopup(
        `<div style="text-align:center"><strong>${business.displayName}</strong><br><span style="font-size:12px">Lokasi Bengkel</span></div>`,
      )
      businessMarker.addTo(map)
    }

    renderMarkers()
    status.value = 'ready'
  } catch (err) {
    console.error('[AreaMap] init failed', err)
    status.value = 'error'
  }
}

function clearMarkers() {
  markers.forEach((m) => m.remove())
  markers.clear()
}

function renderMarkers() {
  if (!L || !map) return
  clearMarkers()
  for (const area of props.areas) {
    if (!area.coordinates) continue
    const selected = area.id === props.selectedId
    const icon = pinIcon(selected)
    if (!icon) continue
    const marker = L.marker([area.coordinates.lat, area.coordinates.lng], {
      icon,
      title: area.name,
      alt: `Area ${area.name}`,
    })
    marker.bindPopup(
      `<strong>${area.name}</strong><br><span style="font-size:12px">${area.description}</span>`,
    )
    marker.on('click', () => emit('select', area.id))
    marker.addTo(map)
    markers.set(area.id, marker)
  }
}

function flyTo(id: string | null) {
  if (!map) return
  if (!id) {
    map.flyTo(defaultCenter, 13, { duration: 0.6 }) // 👈 Balik ke bengkel
    return
  }
  const area = props.areas.find((a) => a.id === id)
  if (!area?.coordinates) return
  map.flyTo([area.coordinates.lat, area.coordinates.lng], 13, { duration: 0.8 })
  nextTick(() => markers.get(id)?.openPopup())
}

watch(
  () => props.selectedId,
  (id) => {
    renderMarkers()
    flyTo(id)
  },
)
watch(() => props.areas, () => renderMarkers(), { deep: true })

onMounted(init)
onBeforeUnmount(() => {
  clearMarkers()
  businessMarker?.remove()
  map?.remove()
  map = null
})
</script>

<template>
  <div class="relative z-0 h-[420px] w-full overflow-hidden rounded-2xl border border-line bg-surface">
    <div
      ref="el"
      class="h-full w-full"
      aria-hidden="true"
    />
    <div
      v-if="status === 'loading' || status === 'idle'"
      class="pointer-events-none absolute inset-0 grid place-items-center bg-surface/70 text-sm text-muted"
    >
      Memuat peta…
    </div>
    <div
      v-else-if="status === 'error'"
      class="absolute inset-0 grid place-items-center bg-surface p-6 text-center text-sm"
    >
      <div>
        <p class="font-semibold text-ink">
          Peta tidak dapat dimuat.
        </p>
        <p class="mt-1 text-muted">
          Daftar area di samping tetap bisa digunakan. Silakan hubungi kami untuk
          informasi lokasi.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.leaflet-container {
  font-family: inherit;
}
.lo-map-pin, .lo-business-pin {
  background: transparent;
  border: 0;
}
</style>