import { OR } from '../src/gates'

describe('`OR` logical operator', () => {
  it('`false`and `false` should return false', () => {
    expect(OR(false, false)).toBe(false)
  })

  it('`true`and `false` should return true', () => {
    expect(OR(true, false)).toBe(true)
  })

  it('`false`and `true` should return true', () => {
    expect(OR(false, true)).toBe(true)
  })

  it('`true` and `true` should return true', () => {
    expect(OR(true, true)).toBe(true)
  })
})
