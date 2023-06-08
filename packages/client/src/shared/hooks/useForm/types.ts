import type { FormEventHandler } from 'react'
import type { AnyObject, ObjectSchema } from 'yup'
import type { FormListFieldData, FormInstance } from 'antd/lib/form'

export type TUserFormProps<T extends AnyObject> = {
  name: string
  form?: FormInstance<T>
  schema: ObjectSchema<T>
  onSubmit: (data: T | null, error: FormListFieldData | null) => void
  hasValidationOnChange?: boolean
}

export type TUseFormReturn<T> = {
  formField: {
    name: string
    form: FormInstance<T>
    onFinish: (values: T) => void
    onChange: FormEventHandler<HTMLFormElement>
  }
}
