<script setup lang="ts">
import { computed } from 'vue'
import { MapPin } from 'lucide-vue-next'
import type { ServiceArea } from '~/types'
import VerifiedBadge from '~/components/ui/VerifiedBadge.vue'

const props = defineProps<{ area: ServiceArea | null }>()
const hasCoords = computed(() => Boolean(props.area?.coordinates))
</script>

<template>
  <div
    class="rounded-2xl border border-line bg-surface p-5 shadow-sm"
    aria-live="polite"
  >
    <template v-if="area">
      <div class="flex items-center gap-2">
        <MapPin
          class="h-5 w-5 text-sea"
          aria-hidden="true"
        />
        <h3 class="font-display text-xl font-bold text-ink">
          {{ area.name }}
        </h3>
        <VerifiedBadge :verified="area.verified" />
      </div>
      <p class="mt-2 text-sm text-muted">
        {{ area.description }}
      </p>
      <p class="mt-3 text-xs text-muted">
        <template v-if="hasCoords && area.coordinateType === 'district-center'">
          Peta menampilkan pusat kecamatan sebagai titik perkiraan — bukan lokasi resmi bengkel.
        </template>
        <template v-else-if="!hasCoords">
          Koordinat area belum tersedia.
        </template>
      </p>
    </template>
    <p
      v-else
      class="text-sm text-muted"
    >
      Pilih salah satu area untuk melihat detail.
    </p>
  </div>
</template>
