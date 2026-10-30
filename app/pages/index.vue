<script setup lang="ts">
import { business, primaryPhone } from '~/config/business'
import { normalizePhone } from '~/utils/phone'
import { faqs } from '~/data/faqs'

import HeroSection from '~/components/sections/HeroSection.vue'
import FactsSection from '~/components/sections/FactsSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import ProcessSection from '~/components/sections/ProcessSection.vue'
import AreasSection from '~/components/sections/AreasSection.vue'
import GallerySection from '~/components/sections/GallerySection.vue'
import PricingSection from '~/components/sections/PricingSection.vue'
import FaqSection from '~/components/sections/FaqSection.vue'
import FinalCtaSection from '~/components/sections/FinalCtaSection.vue'

const config = useRuntimeConfig()
const siteUrl = (config.public.siteUrl as string).replace(/\/$/, '')
const pageTitle = 'Layanan Otomotif Pangandaran (PND) — Bengkel Mobil Terdekat'
const pageDesc = 'Bengkel mobil terdekat di Pangandaran: mobil mogok, towing, aki, overheat, servis, rem, AC, overhaul matic, ECU coding, hingga rental mobil. Telepon dulu.'
const ogImage = `${siteUrl}/og-image.jpg`

useSeoMeta({
  title: pageTitle,
  description: pageDesc,
  ogTitle: pageTitle,
  ogDescription: pageDesc,
  ogType: 'website',
  ogUrl: siteUrl,
  ogSiteName: business.displayName,
  ogLocale: 'id_ID',
  ogImage: ogImage,
  ogImageAlt: 'Layanan Otomotif Pangandaran',
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDesc,
  twitterImage: ogImage,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
})

const serviceAreas = ['Pangandaran', 'Sidamulih', 'Parigi', 'Cijulang', 'Kalipucang']
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${business.coordinates?.lat},${business.coordinates?.lng}`

useHead({
  htmlAttrs: { lang: 'id' },
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AutoRepair',
        name: business.displayName,
        alternateName: [
          'Layanan Otomotif PND',
          'Bengkel Mobil Pangandaran',
          'Bengkel Terdekat Pangandaran',
        ],
        description: pageDesc,
        url: siteUrl,
        image: ogImage,
        telephone: normalizePhone(primaryPhone.display),
        areaServed: serviceAreas,
        priceRange: '$$',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
          },
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Wonoharjo',
          addressLocality: 'Pangandaran',
          addressRegion: 'Jawa Barat',
          postalCode: '46396',
          addressCountry: 'ID',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: business.coordinates?.lat,
          longitude: business.coordinates?.lng,
        },
        hasMap: mapsUrl,
        sameAs: [business.socials?.instagram].filter(Boolean),
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
      }),
    },
  ],
})
</script>

<template>
  <div>
    <HeroSection />
    <FactsSection />
    <ServicesSection />
    <ProcessSection />
    <AreasSection />
    <GallerySection />
    <PricingSection />
    
    <section
      id="tentang"
      class="mx-auto max-w-wrap px-5 py-16"
      aria-labelledby="tentang-judul"
    >
      <h2
        id="tentang-judul"
        class="font-display text-3xl font-extrabold text-ink md:text-4xl"
      >
        Bengkel mobil terdekat di Pangandaran
      </h2>

      <div class="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
        <p>
          {{ business.displayName }} (sering disingkat Layanan Otomotif PND)
          membantu warga dan wisatawan yang mobilnya bermasalah di Kabupaten
          Pangandaran: mobil mogok, aki lemah, ban bocor, servis ringan, rem,
          dan AC mobil.
        </p>
        <p>
          Lokasi kami di {{ business.address }}. Jika Anda sedang mencari
          bengkel terdekat dari posisi Anda sekarang, telepon atau kirim lokasi
          lewat WhatsApp, lalu kami konfirmasi apakah tim bisa datang dan
          berapa estimasi biayanya sebelum pengerjaan dimulai.
        </p>
      </div>

      <h3 class="mt-8 font-display text-xl font-bold text-ink">
        Area layanan
      </h3>
      <ul class="mt-3 flex flex-wrap gap-2">
        <li
          v-for="a in serviceAreas"
          :key="a"
          class="rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-semibold text-ink"
        >
          Bengkel mobil {{ a }}
        </li>
      </ul>
    </section>
    
    <FaqSection />
    <FinalCtaSection />

    <!-- Skip link untuk aksesibilitas keyboard -->
    <a
      href="#atas"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:text-amber-ink"
    >
      Ke atas
    </a>
  </div>
</template>
