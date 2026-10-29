<script setup lang="ts">
import { ref } from 'vue'
import { gallery } from '~/data/gallery'
import GalleryGrid from '~/components/gallery/GalleryGrid.vue'
import GalleryLightbox from '~/components/gallery/GalleryLightbox.vue'

const activeIndex = ref<number | null>(null)

function open(i: number) {
  activeIndex.value = i
}

function close() {
  activeIndex.value = null
}

function prev() {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value - 1 + gallery.length) % gallery.length
}

function next() {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + 1) % gallery.length
}
</script>

<template>
  <section
    id="galeri"
    class="mx-auto max-w-wrap px-5 pt-16"
  >
    <header
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="mb-8 max-w-2xl"
    >
      <h2 class="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-tight text-ink">
        Suasana bengkel
      </h2>
    </header>

    <GalleryGrid
      :items="gallery"
      @open="open"
    />

    <GalleryLightbox
      :items="gallery"
      :index="activeIndex"
      @close="close"
      @prev="prev"
      @next="next"
    />
  </section>
</template>
