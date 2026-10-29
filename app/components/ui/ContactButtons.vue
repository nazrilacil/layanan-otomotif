<script setup lang="ts">
import { computed } from 'vue'
import { Phone, MessageCircle } from 'lucide-vue-next'
import { useContactLinks } from '~/composables/useContactLinks'

const props = defineProps<{
  variant?: 'primary' | 'emergency'
  size?: 'sm' | 'md'
  showLabels?: boolean
}>()

const { primaryPhone, emergencyPhone, primaryTel, emergencyTel, waUrl } = useContactLinks()
const phone = computed(() => (props.variant === 'emergency' ? emergencyPhone.value : primaryPhone.value))
const tel = computed(() => (props.variant === 'emergency' ? emergencyTel.value : primaryTel.value))
const sizeClass = computed(() => (props.size === 'sm' ? 'px-4 py-2.5 min-h-[44px] text-[15px]' : ''))
const showLabels = computed(() => props.showLabels !== false)
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <a
      :href="tel"
      class="btn btn-call"
      :class="sizeClass"
      :aria-label="`Telepon ${phone.display}`"
      rel="noopener"
    >
      <Phone
        class="h-5 w-5"
        aria-hidden="true"
      />
      <span v-if="showLabels">{{ phone.display }}</span>
      <span
        v-else
        class="sr-only"
      >Telepon</span>
    </a>
    <a
      :href="waUrl"
      class="btn btn-wa"
      :class="sizeClass"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle
        class="h-5 w-5"
        aria-hidden="true"
      />
      <span v-if="showLabels">Chat WhatsApp</span>
      <span
        v-else
        class="sr-only"
      >Chat WhatsApp</span>
    </a>
  </div>
</template>
