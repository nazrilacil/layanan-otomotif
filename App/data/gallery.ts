import type { GalleryItem } from '~/types'

import imgBengkelDepan from '~/assets/img/img.jpeg'
import imgAreaParkir from '~/assets/img/img1.jpeg'
import imgScanLokasi from '~/assets/img/img2.jpeg'
import imgLinerSilinder from '~/assets/img/img3.jpeg'
import imgPistonStangSeher from '~/assets/img/img4.jpeg'
import imgNokenAs from '~/assets/img/img5.jpeg'
import imgScanMercedes from '~/assets/img/img6.jpeg'
import imgBodiEverest from '~/assets/img/img7.jpeg'
import imgServisPanggilan from '~/assets/img/img8.jpeg'
import imgMobilPelanggan from '~/assets/img/img10.jpeg'
import imgDiagnosaLaptop from '~/assets/img/img11.jpeg'
import imgTurunMesin from '~/assets/img/img12.jpeg'

export const gallery: GalleryItem[] = [
  {
    id: 'shop-front',
    src: imgBengkelDepan,
    alt: 'Area bengkel dengan mobil derek flatbed dan beberapa kendaraan pelanggan',
    caption: 'Suasana Bengkel',
    category: 'shop',
    width: 1600,
    height: 1200,
  },
  {
    id: 'parking-area',
    src: imgAreaParkir,
    alt: 'Area parkir berkanopi dengan kendaraan pelanggan di bengkel',
    caption: 'Area Parkir & Tunggu',
    category: 'shop',
    width: 1600,
    height: 1200,
  },
  {
    id: 'customer-vehicle',
    src: imgMobilPelanggan,
    alt: 'Ford Ranger dan kendaraan pelanggan lain di area bengkel',
    caption: 'Kendaraan Pelanggan',
    category: 'shop',
    width: 1600,
    height: 1200,
  },
  {
    id: 'scan-onsite',
    src: imgScanLokasi,
    alt: 'Scan komputer pada Ford Ranger menggunakan scanner tablet di lokasi',
    caption: 'Scan Komputer di Lokasi',
    category: 'work',
    width: 1600,
    height: 1200,
  },
  {
    id: 'scan-mercedes',
    src: imgScanMercedes,
    alt: 'Scanner terpasang pada Mercedes-Benz untuk menghapus kode kerusakan',
    caption: 'Scan & Hapus Kode Error',
    category: 'work',
    width: 1600,
    height: 1200,
  },
  {
    id: 'scan-laptop',
    src: imgDiagnosaLaptop,
    alt: 'Diagnosa mesin Ford Ranger 2.2L menggunakan laptop dan data real-time',
    caption: 'Diagnosa Mesin dengan Laptop',
    category: 'work',
    width: 1200,
    height: 1600,
  },
  {
    id: 'cylinder-liner',
    src: imgLinerSilinder,
    alt: 'Empat liner silinder terlepas dari blok mesin diesel',
    caption: 'Penggantian Liner Silinder',
    category: 'work',
    width: 1200,
    height: 1600,
  },
  {
    id: 'piston-conrod',
    src: imgPistonStangSeher,
    alt: 'Piston dan stang seher yang dilepas dari mesin',
    caption: 'Piston & Stang Seher',
    category: 'work',
    width: 1600,
    height: 1200,
  },
  {
    id: 'camshaft-service',
    src: imgNokenAs,
    alt: 'Mesin Mitsubishi dengan kepala silinder terbuka dan noken as terlepas',
    caption: 'Servis Kepala Silinder & Noken As',
    category: 'work',
    width: 1600,
    height: 1200,
  },
  {
    id: 'engine-removal',
    src: imgTurunMesin,
    alt: 'Dua blok mesin diturunkan dari kendaraan di depan Ford Ranger',
    caption: 'Turun Mesin & Overhaul',
    category: 'work',
    width: 1600,
    height: 1200,
  },
  {
    id: 'onsite-service',
    src: imgServisPanggilan,
    alt: 'Mobil dengan kap mesin terbuka sedang dikerjakan di area parkir lokasi pelanggan',
    caption: 'Servis Panggilan',
    category: 'work',
    width: 900,
    height: 1600,
  },
  {
    id: 'body-check',
    src: imgBodiEverest,
    alt: 'Kap mesin Ford Everest yang penyok dan dicek di bengkel',
    caption: 'Pengecekan Bodi Kendaraan',
    category: 'work',
    width: 1200,
    height: 1600,
  },
]
