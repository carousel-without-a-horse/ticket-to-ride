import type { FC } from 'react'

import { Form } from '@/shared/components/form'
import { Input } from '@/shared/components/input'

import type { TInputItemProps } from './types'

export const InputItem: FC<TInputItemProps> = ({
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
  onBlur,
  onInput,
  hidden,
  placeholder,
  validateStatus,
  type,
  addonAfter,
  required,
  className,
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
    className={className}>
    <Input
      addonAfter={addonAfter}
      type={type}
      disabled={disabled}
      onBlur={onBlur}
      onInput={onInput}
      placeholder={placeholder}
    />
  </Form.Item>
)
