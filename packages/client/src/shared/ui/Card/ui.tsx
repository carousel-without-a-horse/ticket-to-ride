import type { CardProps } from 'antd'
import { Card as LibCard } from 'antd'
import type { FC } from 'react'

export const Card: FC<CardProps> = ({
  style,
  headStyle,
  bodyStyle,
  ...props
}) => {
  return (
    <LibCard
      style={{
        padding: '60px 80px',
        width: 'fit-content',
        margin: 'auto',
        maxWidth: '1000px',
        ...style,
      }}
      headStyle={{
        border: 'none',
        marginBottom: '40px',
        textAlign: 'center',
        fontSize: '38px',
        lineHeight: '46px',
        padding: '0',
        ...headStyle,
      }}
      bodyStyle={{
        padding: '0',
        ...bodyStyle,
      }}
      {...props}
    />
  )
}
