import { Form as LibForm } from 'antd'

import type { FormProps, FormItemProps } from 'antd'
import type { PropsWithChildren, FC } from 'react'

const DefaultForm = (formProps: PropsWithChildren<FormProps>) => (
  <LibForm colon={false} layout="vertical" {...formProps} />
)

const DefaultFormItem: FC<FormItemProps> = formItemProps => (
  <LibForm.Item labelAlign="left" {...formItemProps} />
)

export const Form = Object.assign(DefaultForm, {
  ...LibForm,
  Item: DefaultFormItem,
}) as typeof LibForm
