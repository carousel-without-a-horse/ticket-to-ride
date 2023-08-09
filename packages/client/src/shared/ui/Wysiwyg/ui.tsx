import { lazy, Suspense, useEffect, useState } from 'react'

import styles from './styles.module.pcss'

import type { FC } from 'react'
import type { TWysiwyg } from './types'

import 'react-quill/dist/quill.snow.css'

const ReactQuill = lazy(() => import('react-quill'))
const loading = <>Loading...</>

export const Wysiwyg: FC<TWysiwyg> = ({ value, onChange, disabled }) => {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded || typeof window === 'undefined') {
    return null
  }

  return (
    <Suspense fallback={loading}>
      <ReactQuill
        className={styles.wysiwyg}
        value={value}
        readOnly={disabled}
        onChange={onChange}
      />
    </Suspense>
  )
}
