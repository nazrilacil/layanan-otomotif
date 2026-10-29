<script setup lang="ts">
defineProps<{ title: string, subtitle?: string, id?: string }>()
</script>

<template>
  <header class="mb-8 max-w-2xl">
    <h2
      :id="id"
      class="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-tight text-ink"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="mt-2 text-muted"
    >
      {{ subtitle }}
    </p>
  </header>
</template>
