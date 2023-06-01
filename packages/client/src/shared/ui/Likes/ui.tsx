import { useCallback, useMemo } from 'react'
import type { FC } from 'react'
import {
  LikeOutlined,
  DislikeOutlined,
  DislikeFilled,
  LikeFilled,
} from '@ant-design/icons'
import type { TLikes } from './types'
import { Button } from '@/shared/ui/Button'
import { Space } from '@/shared/ui/Space'

const iconLikeOutlined = <LikeOutlined rev={undefined} />
const iconLikeFilled = <LikeFilled rev={undefined} />
const iconDislikeOutlined = <DislikeOutlined rev={undefined} />
const iconDislikeFilled = <DislikeFilled rev={undefined} />

export const Likes: FC<TLikes> = ({
  vote,
  countLikes = 0,
  countDislikes = 0,
  onChange,
}) => {
  const handleLike = useCallback(() => {
    onChange(vote ? undefined : true)
  }, [onChange, vote])

  const handleDislike = useCallback(() => {
    onChange(vote || vote === undefined ? false : undefined)
  }, [onChange, vote])

  const iconLike = useMemo(() => {
    return vote === true ? iconLikeFilled : iconLikeOutlined
  }, [vote])

  const iconDislike = useMemo(() => {
    return vote === false ? iconDislikeFilled : iconDislikeOutlined
  }, [vote])

  return (
    <Space>
      <Space size={2}>
        <Button type="text" icon={iconLike} onClick={handleLike} />
        <span>{countLikes}</span>
      </Space>
      <Space size={2}>
        <Button type="text" icon={iconDislike} onClick={handleDislike} />
        <span>{countDislikes}</span>
      </Space>
    </Space>
  )
}
