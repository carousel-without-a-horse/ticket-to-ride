import type { FormItemProps } from 'antd/es/form/FormItem'

export type TBaseFormItemProps<Values = string> = Omit<
  FormItemProps,
  'initialValue'
> & {
  initialValue?: Values
}
