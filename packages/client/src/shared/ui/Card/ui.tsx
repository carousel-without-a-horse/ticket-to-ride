import { Card as LibCard } from 'antd'
import { useMemo } from 'react'
import classNames from 'classnames'

import styles from './styles.module.pcss'

import type { CardProps } from 'antd'
import type { CSSProperties, FC } from 'react'

const stylesDefault: Record<string, CSSProperties> = {
  headStyle: {
    border: 'none',
    marginBottom: '40px',
    textAlign: 'center',
    fontSize: '38px',
    lineHeight: 1.21,
    padding: '0',
  },
  bodyStyle: {
    padding: '0',
  },
}
export const Card: FC<CardProps> = ({
  className,
  headStyle,
  bodyStyle,
  ...props
}) => {
  const innerStyles = useMemo(() => {
    return {
      headStyle: {
        ...stylesDefault.headStyle,
        ...headStyle,
      },
      bodyStyle: {
        ...stylesDefault.bodyStyle,
        ...bodyStyle,
      },
    }
  }, [bodyStyle, headStyle])

  return (
    <LibCard
      className={classNames(styles.common, className)}
      headStyle={innerStyles.headStyle}
      bodyStyle={innerStyles.bodyStyle}
      {...props}
    />
  )
}
