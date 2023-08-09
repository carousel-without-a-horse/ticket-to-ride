import type { TFormItem } from '../types'
import type { TInput } from '@/shared/ui/Input'

export type TFormInput = TFormItem &
  TInput & {
    inputType?: 'password'
  }
