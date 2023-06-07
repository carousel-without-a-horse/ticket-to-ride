import { useCallback, useEffect, useState } from 'react'
import type { FC } from 'react'
import { data } from './data'
import type { TComment, TComments, TOnReply, TOnVote } from './types'
import { Comment } from './ui/Comment'

export const Comments: FC<TComments> = ({ id, entity }) => {
  const [comments, setComments] = useState<TComment[]>([])

  useEffect(() => {
    console.log(id, entity)
    setComments(data)
  }, [id, entity])

  const handleVote = useCallback<TOnVote>(({ id, value }) => {
    console.log('handleVote', id, value)
  }, [])

  const handleReply = useCallback<TOnReply>(({ id, value }) => {
    console.log('handleReply', id, value)
  }, [])

  return (
    <div>
      {comments.map(item => {
        return (
          <Comment
            key={item.id}
            id={item.id}
            author={item.author}
            date={item.date}
            content={item.content}
            vote={item.vote}
            onVote={handleVote}
            onReply={handleReply}
          />
        )
      })}
    </div>
  )
}
