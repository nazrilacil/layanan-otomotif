<script setup lang="ts">
import { Phone, MessageCircle } from 'lucide-vue-next'
import { useContactLinks } from '~/composables/useContactLinks'

const { primaryPhone, primaryTel, waUrl } = useContactLinks()
</script>

<template>
  <section class="border-y border-line mt-10 bg-surface py-20 text-center">
    <div class="mx-auto max-w-wrap px-5">
      <h2 class="font-display text-[clamp(2.4rem,7vw,4rem)] font-extrabold text-ink">
        Butuh bantuan sekarang?
      </h2>
      <p class="mx-auto mt-3 max-w-lg text-muted">
        Hubungi kami kapan saja, siang maupun malam.
      </p>
      <div class="mt-7 flex flex-wrap justify-center gap-3">
        <a
          :href="primaryTel"
          class="btn btn-call"
          :aria-label="`Telepon ${primaryPhone.display}`"
        >
          <Phone class="h-5 w-5" /> Telepon sekarang
        </a>
        <a
          :href="waUrl"
          class="btn btn-wa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle class="h-5 w-5" /> Chat WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>
