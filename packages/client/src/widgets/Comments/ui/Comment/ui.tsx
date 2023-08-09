import { useMemo } from 'react'

import { Avatar } from '@/shared/ui/Avatar'
import { Space } from '@/shared/ui/Space'
import { Reply } from '@/widgets/Reply'
import { FormattedDate } from '@/features/FormattedDate'
import { Likes } from '@/features/Likes'

import styles from './styles.module.pcss'

import type { TComment } from '@/entities/comment'
import type { FC } from 'react'

export const Comment: FC<TComment> = ({
  id,
  user,
  createdAt,
  content,
  topicId,
}) => {
  const header = useMemo(() => {
    return (
      <Space>
        <span>{user.login}</span>
        <span>
          <FormattedDate date={new Date(createdAt)} />
        </span>
      </Space>
    )
  }, [createdAt, user.login])

  const avatar = user.avatar
    ? `/api/v2/resources/${user.avatar}`
    : 'http://placekitten.com/g/200/200'

  return (
    <div className={styles.wrapper}>
      <Space align="baseline">
        <Avatar src={avatar} />
        <Space direction="vertical" size="large">
          {header}
          <div>{content}</div>
          <div className={styles.actions}>
            <Likes type="comment" id={id} />
            <Reply className={styles.reply} topicId={topicId} parentId={id} />
          </div>
        </Space>
      </Space>
    </div>
  )
}
