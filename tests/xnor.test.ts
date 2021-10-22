import { XNOR } from '../src/gates'

describe('`XNOR` logical operator', () => {
  it('`false`and `false` should return true', () => {
    expect(XNOR(false, false)).toBe(true)
  })

  it('`true`and `false` should return false', () => {
    expect(XNOR(true, false)).toBe(false)
  })

  it('`false`and `true` should return false', () => {
    expect(XNOR(false, true)).toBe(false)
  })

  it('`true` and `true` should return true', () => {
    expect(XNOR(true, true)).toBe(true)
  })
})
