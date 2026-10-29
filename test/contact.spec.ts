import { describe, expect, it } from 'vitest'
import { normalizePhone, telHref } from '../app/utils/phone'
import { waHref } from '../app/utils/whatsapp'

describe('phone normalization', () => {
  it('normalizes a locally-formatted Indonesian number', () => {
    expect(normalizePhone('0821-2141-2555')).toBe('+6282121412555')
  })
  it('keeps an already-international number', () => {
    expect(normalizePhone('+62 878 7913 0311')).toBe('+6287879130311')
  })
  it('produces a tel: link', () => {
    expect(telHref('0821-2141-2555')).toBe('tel:+6282121412555')
  })
})

describe('whatsapp links', () => {
  it('encodes the default message', () => {
    const url = waHref('+6282121412555', 'Halo, mobil saya bermasalah. Bisa dibantu?')
    expect(url).toContain('https://wa.me/6282121412555?text=')
    expect(url).toContain(encodeURIComponent('Halo, mobil saya bermasalah. Bisa dibantu?'))
  })
})
