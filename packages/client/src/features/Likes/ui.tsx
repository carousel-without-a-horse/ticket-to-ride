import { useCallback, useMemo } from 'react'
import {
  LikeOutlined,
  DislikeOutlined,
  DislikeFilled,
  LikeFilled,
} from '@ant-design/icons'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { observer } from 'mobx-react-lite'

import { Button } from '@/shared/ui/Button'
import { Space } from '@/shared/ui/Space'
import { Skeleton } from '@/shared/ui/Skeleton'
import { likeServices } from '@/entities/likes'
import { useStore } from '@/shared/store'

import type { TLikes } from './types'
import type { FC } from 'react'

const iconLikeOutlined = <LikeOutlined rev={undefined} />
const iconLikeFilled = <LikeFilled rev={undefined} />
const iconDislikeOutlined = <DislikeOutlined rev={undefined} />
const iconDislikeFilled = <DislikeFilled rev={undefined} />

const skeletonStyle = { width: 70 }
export const Likes: FC<TLikes> = observer(({ type, id }) => {
  const { userStore } = useStore()
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ['likes', type, id],
    queryFn: () => likeServices.getAll({ type, id }),
  })

  const { mutate: toggleLike, isLoading: isLikeLoading } = useMutation({
    mutationKey: ['likes', type, id],
    mutationFn: () => likeServices.toggleLike({ type, id }),
    onSuccess: () => {
      void queryClient.invalidateQueries(['likes', type, id])
    },
  })

  const { mutate: toggleDislike, isLoading: isDislikeLoading } = useMutation({
    mutationKey: ['likes', type, id],
    mutationFn: () => likeServices.toggleDislike({ type, id }),
    onSuccess: () => queryClient.invalidateQueries(['likes', type, id]),
  })

  const likesCount = useMemo(() => {
    if (!data) return 0
    return data.filter(item => item.isLike).length
  }, [data])

  const dislikesCount = useMemo(() => {
    if (!data) return 0
    return data.filter(item => item.isLike === false).length
  }, [data])

  const vote = useMemo(() => {
    if (!data) return null
    return data.find(item => item.userId === userStore.user?.id)
  }, [data, userStore])

  const handleLike = useCallback(() => toggleLike(), [toggleLike])

  const handleDislike = useCallback(() => toggleDislike(), [toggleDislike])

  const iconLike = useMemo(() => {
    return vote?.isLike === true ? iconLikeFilled : iconLikeOutlined
  }, [vote])

  const iconDislike = useMemo(() => {
    return vote?.isLike === false ? iconDislikeFilled : iconDislikeOutlined
  }, [vote])

  if (isLoading) {
    return <Skeleton active paragraph={false} style={skeletonStyle} />
  }

  return (
    <Space>
      <Space size={2}>
        <Button
          type="text"
          icon={iconLike}
          loading={isLikeLoading}
          disabled={isLikeLoading || isDislikeLoading}
          onClick={handleLike}
        />
        <span>{likesCount}</span>
      </Space>
      <Space size={2}>
        <Button
          type="text"
          icon={iconDislike}
          loading={isDislikeLoading}
          disabled={isLikeLoading || isDislikeLoading}
          onClick={handleDislike}
        />
        <span>{dislikesCount}</span>
      </Space>
    </Space>
  )
})
