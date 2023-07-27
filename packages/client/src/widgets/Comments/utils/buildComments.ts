import type { TBuildComments, TBuildComment } from '../types'

export const buildComments: TBuildComments = (
  comments,
  id = null
): TBuildComment[] => {
  const roots = comments.filter(item => item.parentId === id) || []

  return roots.map(comment => {
    return {
      ...comment,
      children: buildComments(comments, comment.id),
      author: {
        id: '1',
        name: 'Ivan Ivanov',
        avatar: 'http://placekitten.com/g/200/200',
      },
      vote: {
        vote: true,
        likesCount: 5,
        dislikesCount: 1,
      },
    }
  })
}
