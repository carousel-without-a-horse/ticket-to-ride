import type { InferType } from 'yup'
import type schema from './schema'

export type TUseForm = InferType<typeof schema>
