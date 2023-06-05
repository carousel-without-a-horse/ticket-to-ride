import { Button } from '@/shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import { Text } from '@/shared/ui/Text'
import { PageTitle } from '@/shared/ui/PageTitle'
import { Space } from '@/shared/ui/Space'
import { Row } from '@/shared/ui/Row'

const ServerErrorPage = () => {
  const navigate = useNavigate()
  return (
    <Row justify="center">
      <Space direction="vertical" align="center">
        <PageTitle type="success">500</PageTitle>
        <Text strong style={{ color: 'white' }}>
          Произошла ошибка! Мы уже работаем над её исправлением!
        </Text>
        <Button ghost onClick={() => navigate(-1)}>
          Вернуться назад
        </Button>
      </Space>
    </Row>
  )
}

export default ServerErrorPage
