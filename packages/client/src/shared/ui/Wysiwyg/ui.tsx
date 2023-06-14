import ReactQuill from 'react-quill'

import type { CSSProperties, FC } from 'react'
import type { TWysiwyg } from './types'
import 'react-quill/dist/quill.snow.css'

const style: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: 200,
}
export const Wysiwyg: FC<TWysiwyg> = ({ value, onChange, disabled }) => {
  return (
    <ReactQuill
      style={style}
      value={value}
      readOnly={disabled}
      onChange={onChange}
    />
  )
}
