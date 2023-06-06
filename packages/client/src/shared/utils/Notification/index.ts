import { Modal } from '@/shared/ui/Modal'

const success = (message?: string) => {
  Modal.success({
    content: message || 'Все получилось!',
  })
}

const error = (title?: string, message?: string) => {
  Modal.error({
    title: title || 'Ошибка',
    content: message || 'Что-то пошло не так',
  })
}

const warning = (title?: string, message?: string) => {
  Modal.warning({
    title: title || 'Предупреждение',
    content: message || 'Что-то пошло не так',
  })
}

export { success, error, warning }
