import ReactQuill from 'react-quill'

import styles from './styles.module.pcss'

import type { FC } from 'react'
import type { TWysiwyg } from './types'
import 'react-quill/dist/quill.snow.css'

export const Wysiwyg: FC<TWysiwyg> = ({ value, onChange, disabled }) => {
  return (
    <ReactQuill
      className={styles.wysiwyg}
      value={value}
      readOnly={disabled}
      onChange={onChange}
    />
  )
}
