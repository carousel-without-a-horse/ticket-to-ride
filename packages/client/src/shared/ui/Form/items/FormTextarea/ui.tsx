import { Form } from '@/shared/ui/Form'
import { Input } from '@/shared/ui/Input'

import type { FC } from 'react'
import type { TFormTextarea } from './types'

export const FormTextarea: FC<TFormTextarea> = ({
  label,
  name,
  tooltip,
  labelCol,
  wrapperCol,
  rules,
  hasFeedback,
  initialValue,
  style,
  labelAlign = 'left',
  hidden,
  validateStatus,
  required,
  className,
  disabled,
  placeholder,
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
    <Input.TextArea
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  </Form.Item>
)
