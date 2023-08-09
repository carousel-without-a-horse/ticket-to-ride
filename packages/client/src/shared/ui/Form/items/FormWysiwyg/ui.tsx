import { Form } from '@/shared/ui/Form'
import { Wysiwyg } from '@/shared/ui/Wysiwyg'

import type { FC } from 'react'
import type { TFormWysiwyg } from './types'

export const FormWysiwyg: FC<TFormWysiwyg> = ({
  label,
  name,
  tooltip,
  labelCol,
  wrapperCol,
  rules,
  hasFeedback,
  initialValue,
  disabled,
  style,
  labelAlign = 'left',
  hidden,
  validateStatus,
  required,
  className,
  onChange,
}) => (
  <Form.Item
    required={required}
    labelCol={labelCol}
    wrapperCol={wrapperCol}
    label={label}
    name={name}
    tooltip={tooltip}
    rules={rules}
    hasFeedback={hasFeedback}
    initialValue={initialValue}
    style={style}
    labelAlign={labelAlign}
    hidden={hidden}
    validateStatus={validateStatus}
    className={className}
  >
    <Wysiwyg disabled={disabled} onChange={onChange} />
  </Form.Item>
)
