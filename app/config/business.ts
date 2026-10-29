import type { BusinessConfig } from '~/types'

/**
 * Source of truth for business contact + identity.
 * Everything that is not yet confirmed by the owner is marked `verified: false`.
 * Do NOT enable unverified numbers/claims in production without owner sign-off.
 */
export const business: BusinessConfig = {
  displayName: 'Layanan Otomotif Pangandaran',
  legalName: null,
  description:
    'Bantuan otomotif di Pangandaran untuk mobil mogok, aki lemah, ban bocor, servis ringan, rem, dan AC — untuk warga dan wisatawan.',
  phones: [
    {
      id: 'primary',
      label: 'Telepon utama',
      display: '0821-2141-2555',
      normalized: '+6282121412555',
      role: 'primary',
      verified: true,
    },
    {
      id: 'emergency',
      label: 'Bantuan darurat',
      display: '0878-7913-0311',
      normalized: '+6287879130311',
      role: 'emergency',
      verified: true,
    },
  ],
  whatsapp: {
    number: '+6282121412555',
    message: 'Halo, mobil saya bermasalah. Bisa dibantu?',
    verified: true,
  },
  hours: { text: '24 jam, (Senin - Kamis, Sabtu - Minggu, Jum\'at tutup)', verified: true },
  rating: { value: 5.0, count: 17, source: 'Google', verified: true },
  region: 'Kabupaten Pangandaran, Jawa Barat',
  address: 'Wonoharjo, Kec. Pangandaran, Kab. Pangandaran, Jawa Barat 46396',
  coordinates: { lat: -7.672290062762538, lng: 108.6369231198375 },
  socials: {
    instagram: 'https://instagram.com/layananotomotifpangandaran',
  },
}

export const primaryPhone
  = business.phones.find(p => p.role === 'primary') ?? business.phones[0]
export const emergencyPhone
  = business.phones.find(p => p.role === 'emergency') ?? business.phones[0]
