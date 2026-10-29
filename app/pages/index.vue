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
const pageTitle = 'Layanan Otomotif Pangandaran — Bengkel Mobil & Bantuan Darurat'
const pageDesc = 'Bantuan mobil mogok, aki, ban, servis ringan, rem, dan AC di Pangandaran. Hubungi kami untuk estimasi biaya sebelum pengerjaan.'
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

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AutoRepair',
        name: business.displayName,
        description: pageDesc,
        url: siteUrl,
        image: ogImage,
        telephone: normalizePhone(primaryPhone.display),
        areaServed: ['Pangandaran', 'Sidamulih', 'Parigi', 'Cijulang', 'Kalipucang'],
        priceRange: '$$',
        openingHours: 'Mo-Su 00:00-23:59',
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