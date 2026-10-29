<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
import type { ServiceArea } from '~/types'

defineProps<{ areas: ServiceArea[], selectedId: string | null }>()
defineEmits<{ select: [id: string] }>()
</script>

<template>
  <ul
    role="listbox"
    aria-label="Daftar area layanan"
    class="flex flex-wrap gap-2.5"
  >
    <li
      v-if="areas.length === 0"
      class="rounded-full border border-dashed border-line bg-surface px-4 py-2 text-sm text-muted"
    >
      Tidak ada area yang cocok.
    </li>
    <li
      v-for="area in areas"
      :key="area.id"
    >
      <button
        type="button"
        role="option"
        :aria-selected="selectedId === area.id"
        class="inline-flex items-center gap-2 rounded-full border bg-surface px-4 py-2.5 text-[15px] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-sea hover:shadow-sm"
        :class="selectedId === area.id
          ? 'border-amber ring-2 ring-amber/40 text-ink shadow-sm'
          : 'border-line text-ink'"
        @click="$emit('select', area.id)"
      >
        <MapPin
          class="h-4 w-4 shrink-0 text-sea"
          aria-hidden="true"
        />
        {{ area.name }}
      </button>
    </li>
  </ul>
</template>
