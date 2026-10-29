<script setup lang="ts">
import { ref } from 'vue'
import { serviceAreas } from '~/data/service-areas'
import AreaList from '~/components/map/AreaList.vue'
import AreaDetails from '~/components/map/AreaDetails.vue'
import AreaMap from '~/components/map/AreaMap.client.vue'

const selectedId = ref<string | null>(null)

function selectArea(id: string) {
  selectedId.value = selectedId.value === id ? null : id
}

function resetSelection() {
  selectedId.value = null
}
</script>

<template>
  <section id="area" class="mx-auto max-w-wrap px-5 pt-16">
    <header
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="mb-8 max-w-2xl"
    >
      <h2 class="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-tight text-ink">
        Area layanan
      </h2>
      <p class="mt-2 text-muted">
        Melayani wisatawan dan warga di kawasan Pangandaran. Pilih area untuk melihat detail di peta.
      </p>
    </header>

    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { delay: 100, duration: 600 } }"
      class="mb-6 space-y-4"
    >

      <AreaList
        :areas="serviceAreas"
        :selected-id="selectedId"
        @select="selectArea"
      />

      <button
        v-if="selectedId"
        type="button"
        class="text-sm font-semibold text-sea underline-offset-4 transition-colors hover:underline"
        @click="resetSelection"
      >
        Reset pilihan
      </button>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.98, y: 30 }"
      :visible-once="{ opacity: 1, scale: 1, y: 0, transition: { delay: 250, duration: 700 } }"
      class="grid gap-4 lg:grid-cols-[1.5fr_1fr]"
    >
      <div>
        <ClientOnly>
          <AreaMap :areas="serviceAreas" :selected-id="selectedId" @select="selectArea" />
          <template #fallback>
            <div class="grid h-[420px] place-items-center rounded-2xl border border-line bg-surface text-sm text-muted">
              Memuat peta…
            </div>
          </template>
        </ClientOnly>
      </div>

      <div class="space-y-3">
        <AreaDetails :area="serviceAreas.find((a) => a.id === selectedId) ?? null" />
        <p class="text-xs leading-relaxed text-muted">
          Peta menampilkan pusat kecamatan sebagai perkiraan area layanan. Titik pasti
          bengkel dan cakupan per area belum diverifikasi.
        </p>
      </div>
    </div>
  </section>
</template>