import { SignInForm } from '@/widgets/SignInForm'
import { PageTitle } from '@/shared/ui/PageTitle'
import { Card } from '@/shared/ui/Card'
import { withAuth } from '@/shared/hocs'

const SignInPage = withAuth(() => {
  return (
    <Card>
      <PageTitle>Добро пожаловать</PageTitle>

      <SignInForm />
    </Card>
  )
})

export default SignInPage
