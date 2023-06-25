import { SignUpForm } from '@/widgets/SignUpForm'
import { PageTitle } from '@/shared/ui/PageTitle'
import { Card } from '@/shared/ui/Card'

const SignUpPage = () => {
  return (
    <Card>
      <PageTitle>Регистрация</PageTitle>
      <SignUpForm />
    </Card>
  )
}

export default SignUpPage
