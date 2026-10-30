import type { Service } from '~/types'

export const services: Service[] = [
  {
    id: 'inspeksi',
    title: 'Jasa Inspeksi Mobil',
    description: 'Pengecekan menyeluruh kondisi mobil sebelum Anda membeli atau melakukan perjalanan jauh.',
    icon: 'ClipboardCheck',
  },
  {
    id: 'rental-tour',
    title: 'Rental Mobil/Motor & City Tour',
    description: 'Sewa kendaraan harian untuk wisatawan dan paket city tour menjelajahi indahnya Pangandaran.',
    icon: 'KeyRound',
  },
  {
    id: 'mogok',
    title: 'Mobil mogok di jalan',
    description: 'Bantuan datang ke lokasi, dari pengecekan awal sampai penanganan di tempat.',
    icon: 'Truck',
  },
  {
    id: 'crane-towing',
    title: 'Crane/Towing Antar Kota',
    description: 'Layanan derek, crane, dan pengangkutan kendaraan antar kota dengan aman.',
    icon: 'Container',
  },
  {
    id: 'aki',
    title: 'Aki lemah atau mati',
    description: 'Jumper, tes, dan ganti aki langsung di tempat bila diperlukan.',
    icon: 'BatteryCharging',
  },
  {
    id: 'overheat',
    title: 'Mesin Overheat',
    description: 'Penanganan mesin yang kepanasan langsung di lokasi atau bengkel.',
    icon: 'Thermometer',
  },
  {
    id: 'overhaul-matic',
    title: 'Overhaul Matic',
    description: 'Perbaikan menyeluruh komponen transmisi matic agar perpindahan gigi kembali halus.',
    icon: 'Settings',
  },
  {
    id: 'overhaul-truk',
    title: 'Overhaule Mobil kecil, Bus/Truk',
    description: 'Perbaikan mesin dan komponen menyeluruh khusus untuk kendaraan niaga Truk dan Bus.',
    icon: 'Bus',
  },
  {
    id: 'scan-commonrail',
    title: 'Scan Bus/Truk Commonrail',
    description: 'Pengecekan sistem injeksi bahan bakar commonrail pada truk dan bus menggunakan scanner komputer.',
    icon: 'Laptop',
  },
  {
    id: 'ecu',
    title: 'ECU Coding',
    description: 'Pemrograman ulang atau penyesuaian sistem ECU kendaraan Anda.',
    icon: 'Cpu',
  },
  {
    id: 'sparepart',
    title: 'Sparepart Bisa Diantar ke Lokasi',
    description: 'Layanan pengantaran suku cadang langsung ke lokasi kerusakan.',
    icon: 'Package',
  },
  {
    id: 'servis',
    title: 'Servis ringan dan tune up',
    description: 'Ganti oli, filter, busi, dan pengecekan menyeluruh sebelum perjalanan jauh.',
    icon: 'Wrench',
  },
  {
    id: 'rem',
    title: 'Rem dan kaki-kaki',
    description: 'Periksa kampas rem, suspensi, dan bagian yang berbunyi atau bergetar.',
    icon: 'Disc3',
  },
  {
    id: 'ac',
    title: 'AC mobil',
    description: 'Cek dan perbaiki AC yang kurang dingin, supaya perjalanan tetap nyaman.',
    icon: 'Snowflake',
  },
]
