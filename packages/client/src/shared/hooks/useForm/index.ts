import { useCallback } from 'react'
import { ValidationError } from 'yup'

import { Form } from '@/shared/ui/Form'

import type { FormListFieldData } from '@/shared/ui/Form'
import type { ChangeEvent, FormEventHandler } from 'react'
import type { FieldData } from 'rc-field-form/es/interface'
import type { TUseFormReturn, TUseFormProps } from './types'

const validateMapErrorToFields = (event: ValidationError) => {
  return event.inner.map(({ path, errors }) => {
    const name = path
      ?.replace(/[[]/g, '.')
      .replace(/[\]]/g, '')
      .split('.')
      .map((p: string) => (/^\d+$/.test(p) ? Number(p) : p))

    return { name, errors }
  })
}

const useForm = <T extends Record<string, any>>({
  name,
  form: propsForm,
  schema,
  onSubmit,
  hasValidationOnChange = true,
}: TUseFormProps<T>): TUseFormReturn<T> => {
  const [form] = Form.useForm<T>(propsForm)
  const { getFieldsValue } = form

  const onChange: FormEventHandler<HTMLFormElement> = useCallback(
    event => {
      const arrIdField = (event as unknown as ChangeEvent).target.id.split('_')
      const fieldName = arrIdField
        .slice(1, arrIdField.length)
        .map((p: string) => (/^\d+$/.test(p) ? Number(p) : p))

      const errors =
        form
          .getFieldsError()
          .find(err => fieldName.every(n => err.name.includes(n)))?.errors ?? []
      if (errors.length) form.setFields([{ name: fieldName, errors: [] }])

      if (hasValidationOnChange) {
        schema
          .validateAt(fieldName.toString(), getFieldsValue())
          .catch((errorEvent: ValidationError) => {
            const { path, errors } = errorEvent

            if (typeof path !== 'undefined') {
              form.setFields([{ name: path, errors }])
            }
          })
      }
    },
    [form, getFieldsValue, hasValidationOnChange, schema]
  )

  const onFinish = useCallback(
    (data: T) => {
      schema
        .validate(data, { abortEarly: false })
        .then(() => onSubmit(data, null))
        .catch(event => {
          if (event instanceof ValidationError) {
            const fields = validateMapErrorToFields(event)
            form.setFields(fields as FieldData[])
          }
          onSubmit(null, event as FormListFieldData)
        })
    },
    [form, onSubmit, schema]
  )

  return { name, form, onFinish, onChange }
}

export { useForm }
