import { useCallback } from 'react'
import { Form } from '@/shared/ui/Form'
import type { ChangeEvent, FormEventHandler } from 'react'
import type { ValidationError } from 'yup'
import type { FormListFieldData } from 'antd/lib/form'
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

            form.setFields([{ name: path as string, errors: errors }])
          })
      }
    },
    [form, getFieldsValue, hasValidationOnChange, schema]
  )

  const onFinish = useCallback(
    (data: T) => {
      if (!schema) return onSubmit(data, null)

      schema
        .validate(data, { abortEarly: false })
        .then(() => onSubmit(data, null))
        .catch(event => {
          const fields = validateMapErrorToFields(event as ValidationError)
          form.setFields(fields as FieldData[])
          onSubmit(null, event as FormListFieldData)
        })
    },
    [form, onSubmit, schema]
  )

  return { name, form, onFinish, onChange }
}

export default useForm
