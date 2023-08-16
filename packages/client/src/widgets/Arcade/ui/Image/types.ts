import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

export type TImage = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  size?: 'large' | 'small' | 'default'
}
