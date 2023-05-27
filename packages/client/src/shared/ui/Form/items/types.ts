import type { FormItemProps } from 'antd/es/form/FormItem'

export type TFormItem<Values = string> = Omit<FormItemProps, 'initialValue'> & {
  initialValue?: Values
}
