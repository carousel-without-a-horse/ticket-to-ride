import type { InferType } from 'yup'
import type schema from './schema'

export type TUseForm = InferType<typeof schema>

export type TReply = {
  className?: string
  isOpen?: boolean
  topicId: TId
  parentId?: TId
  buttonText?: string
}
