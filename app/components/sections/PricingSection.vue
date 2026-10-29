<template>
  <section class="mx-auto max-w-wrap px-5 pt-16">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="rounded-2xl border-l-4 border-amber border-y border-r border-line bg-surface p-6 shadow-sm"
    >
      <h2 class="font-display text-3xl font-bold text-ink">
        Biaya jelas sebelum dikerjakan
      </h2>
      <p class="mt-2 text-muted">
        Setiap layanan punya estimasi biaya yang kami sampaikan lebih dulu lewat telepon
        atau WhatsApp. Anda setuju, baru kami mulai.
      </p>
      <p class="mt-3 text-sm text-muted">
        Daftar harga rinci akan ditampilkan setelah pemilik mengonfirmasi tarif resmi.
      </p>
    </div>
  </section>
</template>
