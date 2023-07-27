import type { TUseFormReturn } from '@/shared/hooks/useForm/types'

type TValues = Record<string, unknown>

export type TThemeForm = {
  title: string
  initialValues?: TValues
  buttonSubmitText?: string | null
  isLoading: boolean
  formProps: TUseFormReturn<any>
}
