import type { ServiceArea } from '~/types'

/**
 * Coordinates are approximate DISTRICT CENTERS publicly published by
 * OpenStreetMap/Wikipedia, not the verified business location.
 * They are shown on the map with a clear disclaimer. Replace with owner-confirmed
 * business / service coordinates after verification.
 */
export const serviceAreas: ServiceArea[] = [
  {
    id: 'pangandaran',
    name: 'Pangandaran',
    description:
      'Kawasan wisata pantai Pangandaran dan sekitarnya — area layanan utama.',
    coordinates: { lat: -7.6821, lng: 108.6531 },
    coordinateType: 'district-center',
    verified: true,
  },
  {
    id: 'sidamulih',
    name: 'Sidamulih',
    description: 'Kecamatan Sidamulih, Kabupaten Pangandaran.',
    coordinates: { lat: -7.6473, lng: 108.5934 },
    coordinateType: 'district-center',
    verified: true,
  },
  {
    id: 'parigi',
    name: 'Parigi',
    description: 'Kecamatan Parigi, Kabupaten Pangandaran.',
    coordinates: { lat: -7.6831, lng: 108.5032 },
    coordinateType: 'district-center',
    verified: true,
  },
  {
    id: 'cijulang',
    name: 'Cijulang',
    description: 'Kecamatan Cijulang, Kabupaten Pangandaran.',
    coordinates: { lat: -7.7303, lng: 108.4744 },
    coordinateType: 'district-center',
    verified: true,
  },
  {
    id: 'kalipucang',
    name: 'Kalipucang',
    description: 'Kecamatan Kalipucang, Kabupaten Pangandaran.',
    coordinates: { lat: -7.6444, lng: 108.7458 },
    coordinateType: 'district-center',
    verified: true,
  },
]
