import { Button } from '@/shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import { Text } from '@/shared/ui/Text'
import { PageTitle } from '@/shared/ui/PageTitle'
import { useState } from 'react'
import { Space } from '@/shared/ui/Space'
import { Row } from '@/shared/ui/Row'

const ErrorPage = () => {
  const navigate = useNavigate()
  const [errorCode, setErrorCode] = useState<number>(400)
  const [errorMessage, setErrorMessage] = useState<string>(
    'Что-то пошло не так'
  )
  return (
    <Row justify="center">
      <Space direction="vertical">
        <PageTitle type="success" style={{ textAlign: 'center' }}>
          {errorCode}
        </PageTitle>
        <Text strong style={{ color: 'white' }}>
          {errorMessage}
        </Text>
        <Button ghost onClick={() => navigate(-1)}>
          Вернуться назад
        </Button>
      </Space>
    </Row>
  )
}

export default ErrorPage
