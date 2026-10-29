<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import { faqs } from '~/data/faqs'
</script>

<template>
  <section
    id="faq"
    class="mx-auto max-w-wrap px-5 pt-16"
  >
    <header
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="mb-8 max-w-2xl"
    >
      <h2 class="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-tight text-ink">
        Pertanyaan umum
      </h2>
      <p class="mt-2 text-muted">
        Jawaban di bawah ini bersumber dari informasi awal; sebagian masih perlu dikonfirmasi pemilik.
      </p>
    </header>
    
    <div class="space-y-2">
      <details
        v-for="(f, i) in faqs"
        :key="f.id"
        v-motion
        :initial="{ opacity: 0, y: 15 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 80, duration: 400 } }"
        class="group rounded-xl border border-line bg-surface p-4 shadow-sm open:border-amber transition-colors"
      >
        <summary class="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-ink">
          <span>{{ f.question }}</span>
          <!-- 👇 Ikon Panah dengan animasi rotasi -->
          <ChevronDown class="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180 group-open:text-amber" />
        </summary>
        
        <p class="mt-3 text-muted leading-relaxed">
          {{ f.answer }}
        </p>
      </details>
    </div>
  </section>
</template>