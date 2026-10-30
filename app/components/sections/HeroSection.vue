<script setup lang="ts">
import { Phone, MessageCircle } from 'lucide-vue-next'
import { useContactLinks } from '~/composables/useContactLinks'
import VerifiedBadge from '~/components/ui/VerifiedBadge.vue'

const { primaryPhone, primaryTel, waUrl, business } = useContactLinks()
</script>

<template>
  <section
    id="atas"
    class="relative z-0 overflow-hidden bg-navy pb-24 pt-12 text-white"
  >
    <div class="mx-auto grid max-w-wrap items-center gap-10 px-5 md:grid-cols-[1.25fr_.75fr]">
      <div>
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm backdrop-blur-sm"
        >
          <span
            class="h-2.5 w-2.5 animate-pulse rounded-full bg-[#3DDC84]"
            aria-hidden="true"
          />
          Buka 24 jam (kecuali Jumat)
          <VerifiedBadge :verified="business.hours.verified" />
        </div>

        <h1
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 150, duration: 700 } }"
          class="mt-5 font-display text-[clamp(2.75rem,8vw,5.75rem)] font-extrabold leading-[1.02]"
        >
        Bengkel Mobil dan Layanan Otomotif
          <span class="block text-amber">
            di Pangandaran 
          </span>
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 600 } }"
          class="mt-4 max-w-[32em] text-lg text-[#cfdde1]"
        >
          {{ business.description }}
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 450, duration: 600 } }"
          class="mt-6 flex flex-wrap gap-3"
        >
          <a
            :href="primaryTel"
            class="btn btn-call group"
            :aria-label="`Telepon ${primaryPhone.display}`"
          >
            <Phone class="h-5 w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            {{ primaryPhone.display }}
          </a>

          <a
            :href="waUrl"
            class="btn btn-wa group"
            aria-label="Hubungi Layanan Otomotif Pangandaran melalui WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle class="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
            Chat WhatsApp
          </a>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{ opacity: 1, scale: 1, transition: { delay: 300, type: 'spring', stiffness: 100 } }"
        class="relative mx-auto grid aspect-square w-[min(78vw,300px)] place-items-center"
      >
        <span
          class="absolute inset-0 animate-ping rounded-full border-2 border-amber/60"
          aria-hidden="true"
        />
        <a
          :href="primaryTel"
          :aria-label="`Telepon darurat ${primaryPhone.display}`"
          class="group relative grid aspect-square w-[62%] place-content-center rounded-full bg-amber text-center text-amber-ink shadow-[0_14px_40px_rgba(255,180,0,.35)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,180,0,.5)] active:translate-y-0 active:scale-95"
        >
          <Phone class="mx-auto mb-1 h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
          <b class="font-display text-2xl font-extrabold leading-none">Bantuan darurat</b>
          <small class="mt-1 text-[13px] font-semibold">Ketuk untuk menelepon</small>
        </a>
      </div>
    </div>

    <div
      class="absolute bottom-0 left-0 right-0 h-3.5 hazard-stripes"
      aria-hidden="true"
    />
  </section>
</template>

<style scoped>
.hazard-stripes {
  background: repeating-linear-gradient(
    -45deg,
    var(--amber) 0 22px,
    var(--night) 22px 44px
  );
  background-size: 62px 100%;
  animation: slide-stripes 2.4s linear infinite;
}

@keyframes slide-stripes {
  to {
    background-position: 62px 0;
  }
}
</style>
