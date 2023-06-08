import { Card } from '@/shared/ui/Card'
import { Col, Row } from 'antd'
import { Layout, Content } from '@/shared/ui/Layout'
import { Game } from '@/widgets/Game'

const AboutPage = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '1180px',
          height: '900px',
          padding: '10px',
          maxWidth: '1180px',
          backgroundColor: '#F4EBE8',
          borderRadius: 8,
        }}
      >
        <div style={{ display: 'flex', height: 720, marginBottom: 10 }}>
          <div
            style={{
              width: 1000,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              marginRight: 10,
            }}
          >
            <div
              style={{
                height: 80,
                backgroundColor: 'red',
                marginBottom: 10,
              }}
            >
              Users
            </div>

            <Game />
          </div>

          <Col style={{ width: 160, backgroundColor: 'purple' }}>
            <div>Draft</div>
          </Col>
        </div>

        <div style={{ height: 150, backgroundColor: 'green' }}>
          <div>Menu</div>
          <div>Routes cards</div>
          <div>Hand cards</div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
