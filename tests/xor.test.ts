import { XOR } from '../src/gates'

describe('`XOR` logical operator', () => {
  it('`false`and `false` should return false', () => {
    expect(XOR(false, false)).toBe(false)
  })

  it('`true`and `false` should return true', () => {
    expect(XOR(true, false)).toBe(true)
  })

  it('`false`and `true` should return true', () => {
    expect(XOR(false, true)).toBe(true)
  })

  it('`true` and `true` should return false', () => {
    expect(XOR(true, true)).toBe(false)
  })
})
