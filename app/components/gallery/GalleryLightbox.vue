<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import type { GalleryItem } from '~/types'

const props = defineProps<{
  items: GalleryItem[]
  index: number | null
}>()

const emit = defineEmits<{
  close: []
  prev: []
  next: []
}>()

const dialog = ref<HTMLDivElement | null>(null)
const open = computed(() => props.index !== null)
const current = computed(() => (props.index === null ? null : props.items[props.index]))

function onKey(e: KeyboardEvent) {
  if (!open.value) return
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowLeft') emit('prev')
  if (e.key === 'ArrowRight') emit('next')
}

watch(open, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
    dialog.value?.focus()
  }
  else {
    document.body.style.overflow = ''
  }
})

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <div
    v-if="open"
    ref="dialog"
    role="dialog"
    aria-modal="true"
    :aria-label="current ? `Galeri: ${current.caption}` : 'Galeri'"
    tabindex="-1"
    class="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
    @click.self="emit('close')"
  >
    <button
      type="button"
      class="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      aria-label="Tutup galeri"
      @click="emit('close')"
    >
      <X class="h-6 w-6" />
    </button>
    <div class="flex w-full max-w-4xl items-center justify-between gap-4">
      <button
        type="button"
        class="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        aria-label="Sebelumnya"
        @click="emit('prev')"
      >
        <ChevronLeft class="h-6 w-6" />
      </button>
      <figure
        v-if="current"
        class="flex-1 text-center text-white"
      >
        <img
          v-if="current.src"
          :src="current.src"
          :alt="current.alt"
          class="mx-auto max-h-[70vh] w-auto rounded-xl shadow-2xl"
        >
        <div
          v-else
          class="mx-auto grid aspect-[4/3] max-h-[60vh] w-full max-w-xl place-items-center rounded-xl border border-line bg-surface text-sm italic text-muted shadow-2xl"
        >
          Foto asli belum tersedia
        </div>
        <figcaption class="mt-3 text-sm">
          {{ current.caption }}
        </figcaption>
      </figure>
      <button
        type="button"
        class="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        aria-label="Selanjutnya"
        @click="emit('next')"
      >
        <ChevronRight class="h-6 w-6" />
      </button>
    </div>
  </div>
</template>
