import { AND } from '../src/gates'

describe('`AND` logical operator', () => {
  it('`false`and `false` should return false', () => {
    expect(AND(false, false)).toBe(false)
  })

  it('`true`and `false` should return false', () => {
    expect(AND(true, false)).toBe(false)
  })

  it('`false`and `true` should return false', () => {
    expect(AND(false, true)).toBe(false)
  })

  it('`true` and `true` should return true', () => {
    expect(AND(true, true)).toBe(true)
  })
})
