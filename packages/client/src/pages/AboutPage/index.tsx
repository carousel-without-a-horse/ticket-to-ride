import { withAuth } from '@/shared/hocs'
import { Card } from '@/shared/ui/Card'

const AboutPage = withAuth(() => {
  return (
    <Card title="Ticket to ride">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi
      deleniti eius eum explicabo in incidunt ipsam itaque molestias nemo neque
      nisi possimus, quas recusandae reprehenderit saepe ullam unde voluptatum?
    </Card>
  )
})

export default AboutPage
