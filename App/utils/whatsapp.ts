import { normalizePhone } from './phone'

export function waHref(rawNumber: string, message: string): string {
  const number = normalizePhone(rawNumber).replace(/^\+/, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
