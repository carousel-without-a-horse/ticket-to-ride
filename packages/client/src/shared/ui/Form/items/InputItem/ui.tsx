import type { FC } from 'react'

import { Form } from '@/shared/ui/Form'
import { Input } from '@/shared/ui/Input'

import type { TFormInput } from './types'

export const FormInput: FC<TFormInput> = props => {
  const {
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
    inputType = 'default',
  } = props

  const InputComponent = {
    password: Input.Password,
    default: Input,
  }[inputType]

  return (
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
      <InputComponent
        addonAfter={addonAfter}
        type={type}
        disabled={disabled}
        onBlur={onBlur}
        onInput={onInput}
        placeholder={placeholder}
      />
    </Form.Item>
  )
}
