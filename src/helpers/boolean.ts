import type { BooleanLike } from '../types'

export const toBoolean = (objectToCast: unknown): BooleanLike => !!objectToCast
