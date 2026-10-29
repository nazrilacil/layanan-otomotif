<script setup lang="ts">
import { Image as ImageIcon, Car } from 'lucide-vue-next'
import type { GalleryItem } from '~/types'

defineProps<{ items: GalleryItem[] }>()
defineEmits<{ open: [index: number] }>()
</script>

<template>
  <ul class="grid grid-cols-2 gap-3 md:grid-cols-4">
    <li
      v-for="(item, i) in items"
      :key="item.id"
      v-motion
      :initial="{ opacity: 0, scale: 0.95, y: 20 }"
      :visible-once="{ opacity: 1, scale: 1, y: 0, transition: { delay: (i % 4) * 100, duration: 500 } }"
      :class="i === 0 ? 'col-span-2' : ''"
    >
      <button
        type="button"
        class="group relative flex aspect-[4/3] h-full w-full items-center justify-center overflow-hidden rounded-xl border border-line bg-surface text-center text-sm text-muted shadow-sm transition-all duration-300 hover:border-amber hover:shadow-md"
        :aria-label="`Buka ${item.caption}`"
        @click="$emit('open', i)"
      >
        <img
          v-if="item.src"
          :src="item.src"
          :alt="item.alt"
          :width="item.width"
          :height="item.height"
          loading="lazy"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        >
        <span
          v-else
          class="flex flex-col items-center gap-1.5 px-3 py-8 transition-transform duration-300 group-hover:scale-105"
        >
          <Car
            v-if="item.category === 'shop'"
            class="h-8 w-8 text-amber"
            aria-hidden="true"
          />
          <ImageIcon
            v-else
            class="h-8 w-8 text-amber"
            aria-hidden="true"
          />
          <span class="font-semibold text-ink">{{ item.caption }}</span>
          <span class="text-[11px] italic opacity-70">Foto belum tersedia</span>
        </span>
      </button>
    </li>
  </ul>
</template>
