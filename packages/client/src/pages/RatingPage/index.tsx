import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { Content } from '@/shared/ui/Layout'

const columns = [
  {
    title: '',
    dataIndex: 'num',
    key: 'num',
    width: 60,
  },
  {
    title: 'Пользователь',
    dataIndex: 'user',
    ellipsis: true,
    key: 'user',
  },
  {
    title: 'Баллы',
    dataIndex: 'scores',
    key: 'scores',
    ellipsis: true,
  },
]

const dataSource = [
  {
    key: '1',
    num: '1',
    user: 'Mike',
    scores: 132,
  },
  {
    key: '2',
    num: '2',
    user: 'John',
    scores: 42,
  },
  {
    key: '3',
    num: '3',
    user: 'Bill',
    scores: 18,
  },
  {
    key: '4',
    num: '4',
    user: 'Billy Jean',
    scores: 16,
  },
  {
    key: '5',
    num: '5',
    user: 'Kshishtav',
    scores: 15,
  },
  {
    key: '6',
    num: '6',
    user: 'Ognezhka',
    scores: 13,
  },
  {
    key: '7',
    num: '7',
    user: 'Krisopher',
    scores: 10,
  },
  {
    key: '8',
    num: '8',
    user: 'Arron',
    scores: 9,
  },
  {
    key: '9',
    num: '9',
    user: 'Jiuzeppe',
    scores: 7,
  },
  {
    key: '10',
    num: '10',
    user: 'Sonia',
    scores: 5,
  },
  {
    key: '11',
    num: '11',
    user: 'Gregoryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
    scores: 3,
  },
  {
    key: '12',
    num: '12',
    user: 'Simone',
    scores: 0,
  },
]

const RatingPage = () => {
  return (
    <Content>
      <Card
        title="Рейтинг Игроков"
        style={{
          marginBottom: 50,
          width: '100%',
          maxWidth: 1024,
          height: 'calc(100vh - (64px + 50px * 2))',
        }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          style={{ width: '100%', maxWidth: 1024 }}
        />
      </Card>
    </Content>
  )
}

export default RatingPage
