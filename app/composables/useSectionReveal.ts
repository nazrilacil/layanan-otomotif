import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

/**
 * Progressive reveal using IntersectionObserver — no scroll listeners.
 * Respects prefers-reduced-motion by short-circuiting to visible.
 */
export function useSectionReveal(target: Ref<HTMLElement | null>, options?: { threshold?: number }) {
  const visible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      visible.value = true
      return
    }
    if (!target.value) return
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.value = true
            observer?.disconnect()
            observer = null
          }
        }
      },
      { threshold: options?.threshold ?? 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(target.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
  })

  return { visible }
}
