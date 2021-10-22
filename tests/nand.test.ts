import { NAND } from '../src/gates'

describe('`NAND` logical operator', () => {
  it('`false`and `false` should return true', () => {
    expect(NAND(false, false)).toBe(true)
  })

  it('`true`and `false` should return true', () => {
    expect(NAND(true, false)).toBe(true)
  })

  it('`false`and `true` should return true', () => {
    expect(NAND(false, true)).toBe(true)
  })

  it('`true` and `true` should return false', () => {
    expect(NAND(true, true)).toBe(false)
  })
})
