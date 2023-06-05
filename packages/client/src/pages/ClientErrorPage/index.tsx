import { Button } from '@/shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import { Text } from '@/shared/ui/Text'
import { PageTitle } from '@/shared/ui/PageTitle'
import { Space } from '@/shared/ui/Space'
import { Row } from '@/shared/ui/Row'

const ClientErrorPage = () => {
  const navigate = useNavigate()
  return (
    <Row justify="center">
      <Space direction="vertical" align="center">
        <PageTitle type="success">404</PageTitle>
        <Text strong style={{ color: 'white' }}>
          Страница не найдена
        </Text>
        <Button ghost onClick={() => navigate(-1)}>
          Вернуться назад
        </Button>
      </Space>
    </Row>
  )
}

export default ClientErrorPage
