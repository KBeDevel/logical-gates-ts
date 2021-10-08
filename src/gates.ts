import type { BooleanLike } from './types'

export const AND = (a: BooleanLike, b: BooleanLike) => {
  return a && b
}

export const OR = (a: BooleanLike, b: BooleanLike): boolean => {
  return a || b
}

export const XOR = (a: BooleanLike, b: BooleanLike) => {
  return a !== b
}

export const NAND = (a: BooleanLike, b: BooleanLike) => {
  return !(a && b)
}

export const NOR = (a: BooleanLike, b: BooleanLike) => {
  return !a && !b
}

export const XNOR = (a: BooleanLike, b: BooleanLike) => {
  return a === b
}
