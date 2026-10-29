<script setup lang="ts">
import { services } from '~/data/services'
import {
  Truck,
  BatteryCharging,
  Wrench,
  Disc3,
  Snowflake,
  Thermometer,
  Settings,
  Laptop,
  Cpu,
  Package,
  Bus,
  Container, // 👈 Import ikon Container
} from 'lucide-vue-next'

// Daftarkan ikon ke dalam map
const iconMap = {
  Truck,
  BatteryCharging,
  Wrench,
  Disc3,
  Snowflake,
  Thermometer,
  Settings,
  Laptop,
  Cpu,
  Package,
  Bus,
  Container, // 👈 Daftarkan di sini
}

const iconFor = (name: string) => iconMap[name as keyof typeof iconMap] ?? Wrench
</script>

<template>
  <section
    id="layanan"
    class="mx-auto max-w-wrap px-5 pt-16"
  >
    <header
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="mb-8 max-w-2xl"
    >
      <h2 class="text-[clamp(2rem,5vw,3.25rem)] font-bold leading-tight text-ink">
        Layanan untuk mobil Anda
      </h2>
      <p class="mt-2 text-muted">
        Dari kendala mendadak di jalan sampai perawatan rutin.
      </p>
    </header>

    <div class="grid gap-4 md:grid-cols-2">
      <article
        v-for="(service, i) in services"
        :key="service.id"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 50, duration: 500 } }"
        class="group flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber hover:shadow-md"
      >
        <div class="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-amber shadow-sm transition-transform duration-300 group-hover:scale-110">
          <component
            :is="iconFor(service.icon)"
            class="h-6 w-6"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 class="font-display text-xl font-bold leading-tight text-ink">
            {{ service.title }}
          </h3>
          <p class="mt-1.5 text-[15px] leading-relaxed text-muted">
            {{ service.description }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
