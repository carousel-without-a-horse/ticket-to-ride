import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import classNames from 'classnames'

import { Button } from '@/shared/ui/Button'
import { Space } from '@/shared/ui/Space'
import { useForm, useToggle } from '@/shared/hooks'
import { Form, FormTextarea } from '@/shared/ui/Form'
import { commentServices } from '@/entities/comment'

import schema from './schema'

import styles from './styles.module.pcss'

import type { FC } from 'react'
import type { TReply, TUseForm } from './types'

export const Reply: FC<TReply> = ({
  isOpen = false,
  className,
  topicId,
  parentId,
  buttonText,
}) => {
  const { state: isShow, toggle: toggleShow, setFalse } = useToggle(isOpen)
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const [isLoading, setLoading] = useState(false)

  const formProps = useForm<TUseForm>({
    name: 'reply',
    schema,
    onSubmit: data => {
      if (!data) return
      setLoading(true)

      void commentServices
        .create({
          topicId,
          parentId,
          content: data.content,
        })
        .then(() => {
          void queryClient.refetchQueries({
            queryKey: ['themes'],
          })
          return queryClient.invalidateQueries({
            queryKey: ['comments', topicId],
          })
        })
        .then(() => {
          formProps.form.resetFields()
          setFalse()
        })
        .finally(() => setLoading(false))
    },
  })

  if (isShow) {
    return (
      <Form className={classNames(styles.wrapper, className)} {...formProps}>
        <FormTextarea name="content" />
        <Space>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            {t('reply.submit')}
          </Button>
          <Button onClick={setFalse}>{t('reply.cancel')}</Button>
        </Space>
      </Form>
    )
  }

  return (
    <Button className={styles.button} onClick={toggleShow}>
      {buttonText || t('reply.submit')}
    </Button>
  )
}
