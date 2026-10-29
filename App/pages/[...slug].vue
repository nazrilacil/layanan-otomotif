<script setup lang="ts">
import { Phone } from 'lucide-vue-next'
import { useContactLinks } from '~/composables/useContactLinks'

const { primaryTel, primaryPhone } = useContactLinks()

useSeoMeta({
  title: 'Halaman tidak ditemukan — Layanan Otomotif Pangandaran',
  robots: 'noindex',
})
</script>

<template>
  <section class="mx-auto max-w-wrap px-5 py-24 text-center">
    <p class="text-sm font-semibold uppercase tracking-wider text-sea">
      404
    </p>
    <h1 class="mt-3 font-display text-[clamp(2.5rem,7vw,4rem)] font-extrabold">
      Halaman tidak ditemukan
    </h1>
    <p class="mx-auto mt-3 max-w-md text-muted">
      Tautan yang Anda buka tidak tersedia. Silakan kembali ke beranda, atau hubungi kami
      langsung bila Anda butuh bantuan darurat.
    </p>
    <div class="mt-8 flex flex-wrap justify-center gap-3">
      <NuxtLink
        to="/"
        class="btn btn-call"
      >Kembali ke beranda</NuxtLink>
      <a
        :href="primaryTel"
        class="btn btn-ghost !border-navy/40 !text-navy"
        :aria-label="`Telepon ${primaryPhone.display}`"
      >
        <Phone class="h-5 w-5" /> {{ primaryPhone.display }}
      </a>
    </div>
  </section>
</template>
