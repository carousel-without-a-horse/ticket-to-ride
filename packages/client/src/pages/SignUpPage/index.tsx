import { SignUpForm } from '@/widgets/SignUpForm'
import { withAuth } from '@/shared/hocs'
import { PageTitle } from '@/shared/ui/PageTitle'
import { Card } from '@/shared/ui/Card'

const SignUpPage = withAuth(() => {
  return (
    <Card>
      <PageTitle>Регистрация</PageTitle>
      <SignUpForm />
    </Card>
  )
})

export default SignUpPage
