import { Form } from '@/shared/ui/Form'
import { Tags } from '@/shared/ui/Tags'

import type { FC } from 'react'
import type { TFormTags } from './types'

export const FormTags: FC<TFormTags> = ({
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
    <Tags disabled={disabled} onChange={onChange} />
  </Form.Item>
)
