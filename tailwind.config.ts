import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0F2229', deep: '#17323B' },
        amber: { DEFAULT: '#FFB400', ink: '#1B1400' },
        // 👇 Menggunakan CSS Variables agar dinamis
        canvas: 'var(--bg)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        sea: 'var(--sea)',
        wa: '#1FA855',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Arial Narrow', 'Impact', 'sans-serif'],
        body: ['Barlow', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      borderRadius: { xl2: '16px' },
      maxWidth: { wrap: '1080px' },
    },
  },
}
