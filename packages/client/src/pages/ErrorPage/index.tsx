import { Button } from '@/shared/ui/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { Text } from '@/shared/ui/Text'
import { PageTitle } from '@/shared/ui/PageTitle'
import { Space } from '@/shared/ui/Space'
import { Row } from '@/shared/ui/Row'

const ErrorPage = () => {
  const navigate = useNavigate()
  const { code = 404 } = useParams()
  const message =
    code === '500'
      ? 'Произошла ошибка! Мы уже работаем над её исправлением!'
      : 'Страница не найдена'
  return (
    <Row justify="center">
      <Space direction="vertical" align="center">
        <PageTitle type="success">{code}</PageTitle>
        <Text strong style={{ color: 'white' }}>
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
