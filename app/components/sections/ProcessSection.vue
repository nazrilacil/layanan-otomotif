<script setup lang="ts">
const steps = [
  { title: 'Hubungi kami', body: 'Telepon atau kirim WhatsApp, lalu sebutkan masalah mobil Anda.' },
  { title: 'Kirim lokasi', body: 'Bagikan lokasi lewat WhatsApp supaya tim bisa langsung menuju tempat Anda.' },
  { title: 'Terima estimasi, lalu dikerjakan', body: 'Biaya dikabari sebelum pengerjaan dimulai, jadi tidak ada kejutan.' },
]
</script>

<template>
  <section
    id="cara"
    class="mx-auto max-w-wrap px-5 pt-16"
  >
    <header
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="mb-8 max-w-2xl"
    >
      <h2 class="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-tight text-ink">
        Cara minta bantuan
      </h2>
      <p class="mt-2 text-muted">
        Tidak perlu isi formulir. Cukup tiga langkah.
      </p>
    </header>

    <ol class="grid gap-3.5 md:grid-cols-3">
      <li
        v-for="(step, i) in steps"
        :key="i"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 150, duration: 600 } }"
        class="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 shadow-sm transition-colors md:flex-row md:items-start"
      >
        <span
          class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-amber font-display text-2xl font-extrabold text-amber-ink shadow-sm"
          aria-hidden="true"
        >{{ i + 1 }}</span>
        <div>
          <h3 class="font-display text-2xl font-bold text-ink">
            {{ step.title }}
          </h3>
          <p class="mt-1 text-[15px] leading-relaxed text-muted">
            {{ step.body }}
          </p>
        </div>
      </li>
    </ol>
  </section>
</template>
