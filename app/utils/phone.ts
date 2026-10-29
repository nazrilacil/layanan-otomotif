/**
 * Normalize an Indonesian phone number to E.164 (+62...).
 * Accepts formats like "0821-2141-2555", "+62 821 2141 2555", "6282121412555".
 */
export function normalizePhone(input: string): string {
  const digits = input.replace(/\D/g, '')
  if (digits.startsWith('62')) return `+${digits}`
  if (digits.startsWith('0')) return `+62${digits.slice(1)}`
  return `+62${digits}`
}

export function telHref(display: string): string {
  return `tel:${normalizePhone(display)}`
}
