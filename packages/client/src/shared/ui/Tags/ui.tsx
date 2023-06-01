import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ChangeEvent, CSSProperties, FC } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Tag } from '@/shared/ui/Tag'
import { Input } from '@/shared/ui/Input'
import type { TInputRef } from '@/shared/ui/Input'
import type { TTags } from './types'

const tagInputStyle: CSSProperties = {
  width: 78,
  verticalAlign: 'top',
}
export const Tags: FC<TTags> = ({ value, onChange, disabled }) => {
  const tags = useMemo(() => value || [], [value])
  const [inputVisible, setInputVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<TInputRef>(null)

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus()
    }
  }, [inputVisible])

  const handleClose = useCallback(
    (tag: string) => {
      if (onChange) {
        onChange(tags.filter(item => item !== tag))
      }
    },
    [onChange, tags]
  )

  const showInput = useCallback(() => {
    setInputVisible(true)
  }, [])

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }, [])

  const handleInputConfirm = useCallback(() => {
    if (onChange && inputValue && tags.indexOf(inputValue) === -1) {
      onChange([...tags, inputValue])
    }
    setInputVisible(false)
    setInputValue('')
  }, [inputValue, onChange, tags])

  const addedControl = useMemo(() => {
    if (disabled) return null
    if (inputVisible) {
      return (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={tagInputStyle}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )
    }
    return (
      <Tag onClick={showInput}>
        <PlusOutlined rev={undefined} /> Добавить тег
      </Tag>
    )
  }, [
    disabled,
    inputVisible,
    showInput,
    inputValue,
    handleInputChange,
    handleInputConfirm,
  ])

  return (
    <>
      {tags.map(tag => (
        <Tag key={tag} closable={!disabled} onClose={() => handleClose(tag)}>
          {tag}
        </Tag>
      ))}
      {addedControl}
    </>
  )
}
