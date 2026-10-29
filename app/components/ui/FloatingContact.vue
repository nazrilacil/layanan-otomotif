<script setup lang="ts">
import { Phone, MessageCircle } from 'lucide-vue-next'
import { useContactLinks } from '~/composables/useContactLinks'

const { emergencyTel, waUrl } = useContactLinks()
</script>

<template>
  <div
    class="fixed bottom-4 right-4 z-40 flex gap-2.5 md:hidden"
    style="padding-bottom: env(safe-area-inset-bottom)"
  >
    <a
      :href="waUrl"
      class="grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-lg transition hover:scale-105"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle class="h-6 w-6" />
    </a>
    <a
      :href="emergencyTel"
      class="grid h-14 w-14 place-items-center rounded-full bg-amber text-amber-ink shadow-lg transition hover:scale-105"
      aria-label="Telepon darurat"
    >
      <Phone class="h-6 w-6" />
    </a>
  </div>
</template>
