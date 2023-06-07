import type { CSSProperties } from 'react'

export type TReply = {
  style?: CSSProperties
  isOpen?: boolean
  onChange: (value: string) => void
}
