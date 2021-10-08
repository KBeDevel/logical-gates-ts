import { NOR } from '../src/gates'

describe('`NOR` logical operator', () => {
  it('`false`and `false` should return true', () => {
    expect(NOR(false, false)).toBe(true)
  })

  it('`true`and `false` should return false', () => {
    expect(NOR(true, false)).toBe(false)
  })

  it('`false`and `true` should return false', () => {
    expect(NOR(false, true)).toBe(false)
  })

  it('`true` and `true` should return false', () => {
    expect(NOR(true, true)).toBe(false)
  })
})
