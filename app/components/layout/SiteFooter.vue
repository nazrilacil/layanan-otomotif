<script setup lang="ts">
import { MapPin, Clock, Phone, Wrench, Instagram } from 'lucide-vue-next'
import { useContactLinks } from '~/composables/useContactLinks'

const { primaryPhone, primaryTel, business } = useContactLinks()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-navy text-[#9DB0B5]">
    <div class="mx-auto max-w-wrap px-5 py-12 pb-[calc(90px+env(safe-area-inset-bottom))] md:pb-12">
      <div class="grid gap-10 sm:grid-cols-2">
        <div>
          <div class="flex items-center gap-2 font-display text-xl font-bold text-white">
            <Wrench class="h-5 w-5 text-amber" />
            {{ business.displayName }}
          </div>

          <ul class="mt-4 space-y-2.5 text-sm">
            <li class="flex items-start gap-2.5">
              <MapPin class="mt-0.5 h-5 w-5 shrink-0 text-sea" />
              <span>{{ business.address }}</span>
            </li>
            <li class="flex items-start gap-2.5">
              <Clock class="mt-0.5 h-5 w-5 shrink-0 text-sea" />
              <span>
                Buka {{ business.hours.text }} (kecuali Jumat)
              </span>
            </li>
          </ul>
        </div>

        <div class="text-sm">
          <p class="font-semibold text-white">Hubungi Kami</p>
          <ul class="mt-4 space-y-3">
            <li>
              <a
                :href="primaryTel"
                class="group flex items-center gap-2.5 transition hover:text-white"
              >
                <span
                  class="grid h-8 w-8 place-items-center rounded-full bg-white/5 text-sea transition group-hover:bg-white/10"
                >
                  <Phone class="h-4 w-4" />
                </span>
                <span>
                  <span class="block text-xs text-muted">Telepon Utama</span>
                  <span class="font-medium text-white">{{ primaryPhone.display }}</span>
                </span>
              </a>
            </li>
            <li v-if="business.socials?.instagram">
              <a
                :href="business.socials.instagram"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-2.5 transition hover:text-white"
              >
                <span
                  class="grid h-8 w-8 place-items-center rounded-full bg-white/5 text-[#E1306C] transition group-hover:bg-white/10"
                >
                  <Instagram class="h-4 w-4" />
                </span>
                <span>
                  <span class="block text-xs text-muted">Instagram</span>
                  <span class="font-medium text-white">@layananotomotifpangandaran</span>
                </span>
              </a>
            </li>

          </ul>
        </div>
      </div>

      <p class="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed">
        © {{ year }} {{ business.displayName }}. Semua hak cipta dilindungi.
      </p>
    </div>
  </footer>
</template>
