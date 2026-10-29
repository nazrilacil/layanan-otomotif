import { describe, expect, it } from 'vitest'
import { serviceAreas } from '../app/data/service-areas'

describe('service areas', () => {
  it('contains the five areas from the source HTML', () => {
    const names = serviceAreas.map(a => a.name)
    expect(names).toEqual(
      expect.arrayContaining(['Pangandaran', 'Sidamulih', 'Parigi', 'Cijulang', 'Kalipucang']),
    )
  })
  it('uses stable unique ids', () => {
    const ids = new Set(serviceAreas.map(a => a.id))
    expect(ids.size).toBe(serviceAreas.length)
  })
  it('marks every area as unverified until the owner confirms', () => {
    expect(serviceAreas.every(a => a.verified === false)).toBe(true)
  })
})
