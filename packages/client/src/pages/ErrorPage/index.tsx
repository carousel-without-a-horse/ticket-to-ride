import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'
import { PageTitle } from '@/shared/ui/PageTitle'
import { Space } from '@/shared/ui/Space'
import { Row } from '@/shared/ui/Row'

import styles from './styles.module.pcss'

interface IError {
  [key: string]: string
}

const ErrorPage = () => {
  const navigate = useNavigate()
  const { code = '404' } = useParams()
  const messages: IError = {
    404: 'Страница не найдена',
    500: 'Произошла ошибка! Мы уже работаем над её исправлением!',
  }
  const message = messages[code] || 'Страница не найдена'
  return (
    <Row justify="center">
      <Space direction="vertical" align="center">
        <PageTitle type="success">{code}</PageTitle>
        <Text strong className={styles.text}>
          {message}
        </Text>
        <Button ghost onClick={() => navigate(-1)}>
          Вернуться назад
        </Button>
      </Space>
    </Row>
  )
}

export default ErrorPage
