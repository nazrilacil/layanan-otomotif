<script setup lang="ts">
import { ref, type Component } from 'vue'
import {
  Wrench,
  Menu,
  X,
  Phone,
  Sun,
  Moon,
  Car,
  ListChecks,
  MapPin,
  Image as ImageIcon,
  HelpCircle,
  MessageCircle,
} from 'lucide-vue-next'
import { navigation } from '~/data/navigation'
import { useContactLinks } from '~/composables/useContactLinks'

const open = ref(false)
const { primaryPhone, primaryTel, waUrl } = useContactLinks()
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const iconMap: Record<string, Component> = {
  Car,
  ListChecks,
  MapPin,
  Image: ImageIcon,
  HelpCircle,
}
</script>

<template>
  <header
    class="sticky top-0 z-[1000] bg-navy text-white shadow-sm"
    style="padding-top: env(safe-area-inset-top)"
  >
    <div class="mx-auto flex h-16 max-w-wrap items-center justify-between gap-3 px-5">
      <a
        href="#atas"
        class="flex items-center gap-2.5 font-display text-xl font-bold tracking-wide"
      >
        <span class="grid h-9 w-9 place-items-center rounded-lg bg-amber text-amber-ink">
          <Wrench class="h-5 w-5" />
        </span>
        <span class="hidden sm:inline">Layanan Otomotif Pangandaran</span>
        <span class="sm:hidden">Otomotif Pangandaran</span>
      </a>

      <nav
        aria-label="Navigasi utama"
        class="hidden md:block"
      >
        <ul class="flex items-center gap-6 text-[15px] font-medium">
          <li
            v-for="item in navigation"
            :key="item.id"
          >
            <a
              :href="item.href"
              class="flex items-center gap-1.5 opacity-85 transition hover:text-amber hover:opacity-100"
            >
              <component
                :is="iconMap[item.icon]"
                class="h-4 w-4"
                aria-hidden="true"
              />
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
          :aria-label="colorMode.value === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'"
          @click="toggleTheme"
        >
          <Sun
            v-if="colorMode.value === 'dark'"
            class="h-5 w-5"
          />
          <Moon
            v-else
            class="h-5 w-5"
          />
        </button>

        <a
          :href="waUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-wa hidden !min-h-[44px] !px-4 !py-2.5 !text-[15px] md:inline-flex"
          aria-label="Chat WhatsApp"
        >
          <MessageCircle class="h-4 w-4" />
        </a>

        <a
          :href="primaryTel"
          class="btn btn-call hidden !min-h-[44px] !py-2.5 !text-[15px] md:inline-flex"
          :aria-label="`Telepon ${primaryPhone.display}`"
        >
          <Phone class="h-4 w-4" />
          Telepon
        </a>

        <button
          class="grid h-11 w-11 place-items-center rounded-lg text-white md:hidden"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          aria-label="Buka menu"
          @click="open = !open"
        >
          <Menu
            v-if="!open"
            class="h-6 w-6"
          />
          <X
            v-else
            class="h-6 w-6"
          />
        </button>
      </div>
    </div>

    <div
      v-show="open"
      id="mobile-menu"
      class="border-t border-white/10 bg-navy md:hidden"
    >
      <ul class="space-y-1 px-5 py-4">
        <li
          v-for="item in navigation"
          :key="item.id"
        >
          <a
            :href="item.href"
            class="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-white/5"
            @click="open = false"
          >
            <component
              :is="iconMap[item.icon]"
              class="h-5 w-5 text-amber"
              aria-hidden="true"
            />
            <span>{{ item.label }}</span>
          </a>
        </li>
        <li class="pt-2">
          <a
            :href="primaryTel"
            class="btn btn-call w-full"
            :aria-label="`Telepon ${primaryPhone.display}`"
          >
            <Phone class="h-5 w-5" /> {{ primaryPhone.display }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
