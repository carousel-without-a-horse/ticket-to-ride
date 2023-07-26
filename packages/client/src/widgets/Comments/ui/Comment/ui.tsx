import { useMemo } from 'react'

import { Avatar } from '@/shared/ui/Avatar'
import { Space } from '@/shared/ui/Space'
import { Reply } from '@/widgets/Reply'

import styles from './styles.module.pcss'

import type { TComment } from '@/entities/comment'
import type { FC } from 'react'

export const Comment: FC<TComment> = ({
  id,
  userId,
  createdAt,
  content,
  topicId,
}) => {
  const header = useMemo(() => {
    return (
      <Space>
        <span>{userId}</span>
        <span>{createdAt}</span>
      </Space>
    )
  }, [createdAt, userId])

  return (
    <div className={styles.wrapper}>
      <Space align="baseline">
        <Avatar src="http://placekitten.com/g/200/200" />
        <Space direction="vertical" size="large">
          {header}
          <div>{content}</div>
          <div className={styles.actions}>
            {/*{vote && <Likes {...vote} onChange={handleLike} />}*/}
            <Reply className={styles.reply} topicId={topicId} parentId={id} />
          </div>
        </Space>
      </Space>
    </div>
  )
}
