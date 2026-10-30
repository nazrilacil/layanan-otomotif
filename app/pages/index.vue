
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
const canonicalUrl = `${siteUrl}/`

// SEO Metadata
const pageTitle = 'Layanan Otomotif Pangandaran | Bengkel Mobil & Bantuan'

const pageDesc =
  'Bengkel mobil di Pangandaran untuk servis, mobil mogok, towing, aki, AC, rem, overhaul, ECU coding, scan truk, rental kendaraan, dan pengantaran sparepart. Hubungi Layanan Otomotif Pangandaran.'

const ogImage = `${siteUrl}/og-image.jpg`

useSeoMeta({
  title: pageTitle,
  description: pageDesc,

  ogTitle: pageTitle,
  ogDescription: pageDesc,
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogSiteName: business.displayName,
  ogLocale: 'id_ID',
  ogImage,
  ogImageAlt: 'Layanan Otomotif PND - Bengkel Mobil Pangandaran',

  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDesc,
  twitterImage: ogImage,

  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
})

// Area layanan
const serviceAreas = [
  'Pangandaran',
  'Sidamulih',
  'Parigi',
  'Cijulang',
  'Kalipucang',
]

// Validasi koordinat sebelum dimasukkan ke Schema
const latitude = business.coordinates?.lat
const longitude = business.coordinates?.lng

const hasCoordinates =
  typeof latitude === 'number' &&
  typeof longitude === 'number' &&
  Number.isFinite(latitude) &&
  Number.isFinite(longitude)

const mapsUrl = hasCoordinates
  ? `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
  : undefined

// Schema bisnis
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',

  '@id': `${canonicalUrl}#business`,
  name: business.displayName,
  alternateName: 'Layanan Otomotif Pangandaran',

  url: canonicalUrl,
  description: pageDesc,
  image: ogImage,
  telephone: normalizePhone(primaryPhone.display),

  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Wonoharjo',
    addressLocality: 'Pangandaran',
    addressRegion: 'Jawa Barat',
    postalCode: '46396',
    addressCountry: 'ID',
  },

  areaServed: serviceAreas.map((area) => ({
    '@type': 'AdministrativeArea',
    name: area,
  })),

  // Senin-Kamis dan Sabtu-Minggu buka 24 jam.
  // Jumat tutup.
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],

  ...(hasCoordinates && {
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    hasMap: mapsUrl,
  }),

  ...(business.socials?.instagram && {
    sameAs: [business.socials.instagram],
  }),
}

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

useHead({
  htmlAttrs: {
    lang: 'id',
  },

  link: [
    {
      rel: 'canonical',
      href: canonicalUrl,
    },
  ],

  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(businessSchema),
    },

    ...(faqs.length
      ? [
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(faqSchema),
          },
        ]
      : []),
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

    <!-- Tentang bisnis -->
    <section
      id="tentang"
      class="mx-auto max-w-wrap px-5 py-16"
      aria-labelledby="tentang-judul"
    >
      <h2
        id="tentang-judul"
        class="font-display text-3xl font-extrabold text-ink md:text-4xl"
      >
        Bengkel Mobil dan Layanan Otomotif di Pangandaran
      </h2>

      <div class="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
        <p>
          {{ business.displayName }} atau Layanan Otomotif PND
          menyediakan berbagai layanan otomotif untuk warga dan wisatawan
          di Kabupaten Pangandaran. Layanan meliputi servis mobil,
          penanganan mobil mogok, pemeriksaan aki, perbaikan AC,
          rem, kaki-kaki, hingga perbaikan mesin.
        </p>

        <p>
          Kami juga menyediakan layanan towing antar kota,
          overhaul transmisi matic, ECU coding, scan kendaraan
          bus dan truk Commonrail, rental kendaraan, serta
          pengantaran sparepart ke lokasi sesuai ketersediaan.
        </p>

        <p>
          Lokasi kami berada di {{ business.address }}.
          Untuk menanyakan layanan, ketersediaan sparepart,
          atau bantuan kendaraan, silakan hubungi kami melalui
          telepon atau WhatsApp. Estimasi biaya akan dikonfirmasi
          sebelum pengerjaan dimulai.
        </p>
      </div>

      <h3 class="mt-8 font-display text-xl font-bold text-ink">
        Area Layanan Otomotif
      </h3>

      <ul class="mt-3 flex flex-wrap gap-2">
        <li
          v-for="area in serviceAreas"
          :key="area"
          class="rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-semibold text-ink"
        >
          {{ area }}, Pangandaran
        </li>
      </ul>
    </section>

    <FaqSection />
    <FinalCtaSection />

    <!-- Skip link aksesibilitas -->
    <a
      href="#atas"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:text-amber-ink"
    >
      Ke atas
    </a>
  </div>
</template>
