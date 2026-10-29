<script setup lang="ts">
import SiteHeader from '~/components/layout/SiteHeader.vue'
import SiteFooter from '~/components/layout/SiteFooter.vue'
import FloatingContact from '~/components/ui/FloatingContact.vue'
</script>

<template>
  <div class="min-h-screen bg-canvas text-ink">
    <SiteHeader />
    <main
      id="konten"
      role="main"
    >
      <slot />
    </main>
    <SiteFooter />
    <FloatingContact />
  </div>
</template>
