<script setup lang="ts">
import { Star, Clock, Truck, MapPin } from 'lucide-vue-next'
import { business } from '~/config/business'
import VerifiedBadge from '~/components/ui/VerifiedBadge.vue'

const facts = [
  { icon: Star, primary: business.rating.value.toFixed(1).replace('.', ','), secondary: `dari ${business.rating.count} ulasan`, verified: business.rating.verified },
  { icon: Clock, primary: business.hours.text, secondary: 'setiap hari', verified: business.hours.verified },
  { icon: Truck, primary: 'Datang ke lokasi', secondary: 'untuk kendala di jalan', verified: true },
  { icon: MapPin, primary: 'Pangandaran', secondary: 'dan sekitarnya', verified: true },
]
</script>

<template>
  <div class="mx-auto -mt-8 max-w-wrap px-5 relative z-10">
    <ul class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <li
        v-for="(fact, i) in facts"
        :key="i"
        class="flex items-center gap-3 rounded-xl border border-line bg-surface p-4 shadow-sm transition hover:shadow-md"
      >
        <component
          :is="fact.icon"
          class="h-7 w-7 shrink-0 text-sea"
          aria-hidden="true"
        />
        <div class="min-w-0">
          <b class="block font-display text-lg leading-tight text-ink">{{ fact.primary }}</b>
          <span class="block text-[13px] leading-tight text-muted">{{ fact.secondary }}</span>
          <VerifiedBadge :verified="fact.verified" />
        </div>
      </li>
    </ul>
  </div>
</template>
