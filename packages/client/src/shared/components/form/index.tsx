import type { FormProps, FormItemProps } from 'antd'
import { Form as LibForm } from 'antd'
import type { PropsWithChildren, FC } from 'react'
export * from './items'

const DefaultForm = (formProps: PropsWithChildren<FormProps>) => (
  <LibForm
    colon={false}
    layout="vertical"
    style={{ width: 420 }}
    {...formProps}
  />
)

const DefaultFormItem: FC<FormItemProps> = formItemProps => (
  <LibForm.Item labelAlign="left" {...formItemProps} />
)

const Form = Object.assign(DefaultForm, {
  ...LibForm,
  Item: DefaultFormItem,
}) as typeof LibForm

export { Form }
