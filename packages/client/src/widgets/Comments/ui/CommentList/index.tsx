import { Comment } from '../Comment'

import { colors } from './utils/constants'

import styles from './styles.module.pcss'

import type { TCommentList } from './types'
import type { FC } from 'react'

export const CommentList: FC<TCommentList> = ({ data, level = 0 }) => {
  const color = colors[level % colors.length]

  return (
    <>
      {data.map(({ children, ...props }) => {
        return (
          <div
            key={props.id}
            className={styles.comment}
            style={{ borderLeftColor: color }}
          >
            <Comment {...props} />
            <div className={styles.replies}>
              {children && <CommentList data={children} level={level + 1} />}
            </div>
          </div>
        )
      })}
    </>
  )
}
