import classNames from 'classnames'

import styles from './styles.module.pcss'

import type { TImage } from './types'
import type { FC } from 'react'

export const Image: FC<TImage> = ({ size = 'default', ...props }) => {
  return (
    <img
      alt="Image"
      className={classNames(styles.image, styles[size])}
      {...props}
    />
  )
}
