import { Card as LibCard } from 'antd'
import { useMemo } from 'react'

import type { CardProps } from 'antd'
import type { CSSProperties, FC } from 'react'

const stylesDefault: Record<string, CSSProperties> = {
  common: {
    padding: '60px 80px',
    width: 'fit-content',
    margin: 'auto',
    maxWidth: '1000px',
  },
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
  style,
  headStyle,
  bodyStyle,
  ...props
}) => {
  const styles = useMemo(() => {
    return {
      common: {
        ...stylesDefault.common,
        ...style,
      },
      headStyle: {
        ...stylesDefault.headStyle,
        ...headStyle,
      },
      bodyStyle: {
        ...stylesDefault.bodyStyle,
        ...bodyStyle,
      },
    }
  }, [bodyStyle, headStyle, style])

  return (
    <LibCard
      style={styles.common}
      headStyle={styles.headStyle}
      bodyStyle={styles.bodyStyle}
      {...props}
    />
  )
}
