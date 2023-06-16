import { colors } from '@/app/providers/colors'

import stylesAd from './styles.module.pcss'

import type { CSSProperties } from 'react'

const styles: Record<string, CSSProperties> = {
  button: {
    width: 130,
    height: 70,
    borderRadius: 6,
    cursor: 'pointer',
    fontWeight: 600,
    color: colors.game.text,
    backgroundColor: colors.game.greenCold,
    border: `1px solid ${colors.game.white}`,
  },
}

export interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  specialProp?: string
}

export const Button = ({ style, ...props }: IButtonProps) => {
  return (
    <button
      className={stylesAd.button}
      style={{ ...styles.button, ...style }}
      {...props}
    />
  )
}
