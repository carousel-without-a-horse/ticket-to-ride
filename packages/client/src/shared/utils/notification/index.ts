import { notification } from 'antd'

import { Modal } from '@/shared/ui/Modal'

export const success = (message?: string) => {
  Modal.success({
    content: message || 'Все получилось!',
  })
}

export const error = (title?: string, message?: string) => {
  Modal.error({
    title: title || 'Ошибка',
    content: message || 'Что-то пошло не так',
  })
}

export const warning = (title?: string, message?: string) => {
  Modal.warning({
    title: title || 'Предупреждение',
    content: message || 'Что-то пошло не так',
  })
}

export const useNotification = notification.useNotification
