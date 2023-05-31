import { SignInForm } from '@/widgets/SignInForm'
import { PageTitle } from '@/shared/ui/PageTitle'
import { Card } from '@/shared/ui/Card'

const SignInPage = () => {
  return (
    <Card>
      <PageTitle>Добро пожаловать</PageTitle>
      <SignInForm />
    </Card>
  )
}

export default SignInPage
