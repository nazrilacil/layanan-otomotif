<script setup lang="ts">
defineProps<{ verified: boolean, label?: string }>()
</script>

<template>
  <span
    v-if="!verified"
    class="inline-flex items-center gap-1 rounded-full border border-amber/40 bg-amber/10 px-2.5 py-0.5 text-xs font-medium text-amber-ink dark:text-amber"
    :title="label || 'Informasi belum dikonfirmasi pemilik'"
  >
    Belum dikonfirmasi
  </span>
</template>
