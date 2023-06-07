import type { CSSProperties, FC } from 'react'
import { useCallback, useMemo } from 'react'
import { Avatar } from '@/shared/ui/Avatar'
import { Space } from '@/shared/ui/Space'
import { Reply } from '@/shared/ui/Reply'
import { Likes } from '@/shared/ui/Likes'
import type { TReply } from '@/shared/ui/Reply'
import type { TLikes } from '@/shared/ui/Likes'
import type { TComment } from '../../types'

const styles: Record<string, CSSProperties> = {
  wrapper: { marginBottom: 20 },
  actions: {
    width: '100%',
    display: 'flex',
    alignItems: 'start',
    gap: 25,
  },
  reply: {
    flexGrow: '1',
  },
}

export const Comment: FC<TComment> = ({
  id,
  author,
  date,
  content,
  vote,
  onVote,
  onReply,
}) => {
  const header = useMemo(() => {
    return (
      <Space>
        <span>{author.name}</span>
        <span>{date}</span>
      </Space>
    )
  }, [author.name, date])

  const handleLike: TLikes['onChange'] = useCallback(
    value => {
      onVote && onVote({ id, value })
    },
    [id, onVote]
  )

  const handleReply: TReply['onChange'] = useCallback(
    value => {
      onReply && onReply({ id, value })
    },
    [id, onReply]
  )

  return (
    <div style={styles.wrapper}>
      <Space align="baseline">
        <Avatar src={author.avatar} />
        <Space direction="vertical" size="large">
          {header}
          <div>{content}</div>
          <div style={styles.actions}>
            {vote && <Likes {...vote} onChange={handleLike} />}
            {handleReply && (
              <Reply style={styles.reply} onChange={handleReply} />
            )}
          </div>
        </Space>
      </Space>
    </div>
  )
}