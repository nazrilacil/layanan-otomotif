export type PhoneRole = 'primary' | 'emergency' | 'whatsapp'

export interface PhoneNumber {
  id: string
  label: string
  /** Human-readable display, e.g. "0821-2141-2555" */
  display: string
  /** Normalized E.164, e.g. "+6282121412555" */
  normalized: string
  role: PhoneRole
  /** Whether the business owner has confirmed this number. */
  verified: boolean
}

export interface BusinessRating {
  value: number
  count: number
  source: string
  verified: boolean
}

export interface BusinessConfig {
  displayName: string
  legalName: string | null
  description: string
  phones: PhoneNumber[]
  whatsapp: { number: string, message: string, verified: boolean }
  hours: { text: string, verified: boolean }
  rating: BusinessRating
  region: string
  address: string | null
  coordinates: { lat: number, lng: number } | null
    socials?: {
    instagram?: string
    facebook?: string
  }
}

export interface Service {
  id: string
  title: string
  description: string
  /** Lucide Vue Next icon name */
  icon: string
}

export type CoordinateType = 'district-center' | 'business-location' | 'unknown'

export interface ServiceArea {
  id: string
  name: string
  description: string
  coordinates: { lat: number, lng: number } | null
  coordinateType: CoordinateType
  verified: boolean
}

export interface GalleryItem {
  id: string
  /** null → no real photo yet; render an illustrated placeholder */
  src: string | null
  alt: string
  caption: string
  category: 'shop' | 'work' | 'team' | 'result'
  width: number
  height: number
}

export interface Faq {
  id: string
  question: string
  answer: string
  /** true if the answer depends on unverified owner data */
  pending: boolean
}

export interface NavItem {
  id: string
  label: string
  href: string
  icon: string // 👈 Tambahkan ini
}
