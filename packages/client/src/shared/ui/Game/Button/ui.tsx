import classNames from 'classnames'

import styles from './styles.module.pcss'

import type { IProps } from './types'

export const Button = ({ variant = 'normal', ...props }: IProps) => {
  return (
    <button className={classNames(styles.button, styles[variant])} {...props} />
  )
}
