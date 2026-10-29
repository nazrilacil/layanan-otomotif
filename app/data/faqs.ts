import type { Faq } from '~/types'

export const faqs: Faq[] = [
  {
    id: 'cara-bantuan',
    question: 'Bagaimana cara meminta bantuan?',
    answer:
      'Telepon atau kirim WhatsApp ke nomor yang tertera, jelaskan masalah mobil Anda, dan kirim lokasi lewat WhatsApp. Tim akan mengabari estimasi biaya sebelum mulai bekerja.',
    pending: false,
  },
  {
    id: 'jam',
    question: 'Apakah benar buka 24 jam?',
    answer:
      'Menurut informasi awal, layanan tersedia 24 jam setiap hari. Karena jam operasional belum dikonfirmasi ulang, silakan hubungi kami untuk memastikan ketersediaan saat Anda butuh.',
    pending: false,
  },
  {
    id: 'estimasi',
    question: 'Apakah biaya bisa diketahui sebelum pengerjaan?',
    answer:
      'Ya. Kami sampaikan estimasi biaya terlebih dahulu lewat telepon atau WhatsApp. Pengerjaan dimulai setelah Anda menyetujui estimasi tersebut.',
    pending: false,
  },
  {
    id: 'area-luar',
    question: 'Apakah bisa datang ke luar area Pangandaran?',
    answer:
      'Area layanan awal meliputi Pangandaran, Sidamulih, Parigi, Cijulang, dan Kalipucang. Untuk lokasi di luar daftar ini, hubungi kami untuk memastikan ketersediaan.',
    pending: false,
  },
  {
    id: 'malam',
    question: 'Bagaimana jika mobil mogok tengah malam?',
    answer:
      'Silakan hubungi nomor darurat yang tercantum. Kami akan mengonfirmasi ketersediaan tim saat itu juga sebelum Anda menunggu di lokasi.',
    pending: false,
  },
]
