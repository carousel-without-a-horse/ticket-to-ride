import type * as yup from 'yup'
import type schema from './schema'

export type TUseForm = yup.InferType<typeof schema>
