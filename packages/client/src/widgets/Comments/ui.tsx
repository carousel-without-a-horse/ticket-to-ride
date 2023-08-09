import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

import { commentServices } from '@/entities/comment'
import { Empty } from '@/shared/ui/Empty'
import styles from '@/widgets/Comments/ui/Comment/styles.module.pcss'
import { Reply } from '@/widgets/Reply'

import { SkeletonComment } from './ui/SkeletonComment'
import { CommentList } from './ui/CommentList'
import { buildComments } from './utils/buildComments'

import type { FC } from 'react'
import type { TComments } from './types'

export const Comments: FC<TComments> = ({ id }) => {
  const { t } = useTranslation()

  const { data, isLoading } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => commentServices.getCommentsByTopicId(id),
  })

  if (isLoading) {
    return <SkeletonComment />
  }

  if (!data) {
    return <Empty description={t('comments.empty')} />
  }

  const comments = buildComments(data)
  const buttonText = t('reply.comment')

  return (
    <>
      <Reply className={styles.reply} topicId={id} buttonText={buttonText} />
      <CommentList data={comments} />
    </>
  )
}
