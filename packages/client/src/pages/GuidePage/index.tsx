import { UserOutlined } from '@ant-design/icons'
import type { TTabsItems } from '@/shared/ui/Tabs'
import { useState } from 'react'
import type { TUpload, TUploadFile } from '@/shared/ui/Upload'
import { Card } from '@/shared/ui/Card'
import { Tabs } from '@/shared/ui/Tabs'
import { Space } from '@/shared/ui/Space'
import { Form, FormInput } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import { Avatar } from '@/shared/ui/Avatar'
import { Tag } from '@/shared/ui/Tag'
import { Upload } from '@/shared/ui/Upload'
import { Table } from '@/shared/ui/Table'
import { Content } from '@/shared/ui/Layout'
import { Reply } from '@/shared/ui/Reply'
import { Likes } from '@/shared/ui/Likes'
import { success, error, warning } from '@/shared/utils/notification/intex'

const tabsItem: TTabsItems = [
  { id: '1', key: '1', label: 'Login' },
  { id: '2', key: '2', label: 'Register' },
]
const iconUser = <UserOutlined rev={undefined} />
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
]

const columns = [
  {
    title: '',
    dataIndex: 'num',
    key: 'num',
  },
  {
    title: 'Пользователь',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'Баллы',
    dataIndex: 'scores',
    key: 'scores',
  },
]

const style = {
  card: { marginBottom: 40 },
  table: { width: 700 },
}

const GuidePage = () => {
  const [fileList, setFileList] = useState<TUploadFile[]>([])

  const handleChange: TUpload['onChange'] = ({ fileList }) => {
    setFileList(fileList)
  }

  return (
    <>
      <Content>
        <Card title="UI" style={style.card}>
          <h2>Tabs</h2>
          <Tabs items={tabsItem} />
          <h2>Buttons</h2>
          <Space>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
          </Space>
          <h2>Avatar</h2>
          <Space>
            <Avatar size={250} icon={iconUser} />
            <Avatar size="small" icon={iconUser} />
          </Space>
          <h2>Tags</h2>
          <Space>
            <Tag>Tag 1</Tag>
            <Tag>
              <a href="https://github.com/ant-design/ant-design/issues/1862">
                Link
              </a>
            </Tag>
            <Tag closable>Tag 2</Tag>
          </Space>
          <h2>Modal</h2>
          <Space>
            <Button onClick={() => success()}>Success</Button>
            <Button onClick={() => error()}>Error</Button>
            <Button onClick={() => warning()}>Warning</Button>
          </Space>
          <h2>Upload</h2>
          <Upload
            name="avatar"
            listType="picture-card"
            accept={'image/png, image/jpeg'}
            fileList={fileList}
            onChange={handleChange}
            maxCount={1}
          >
            {fileList.length < 1 && '+ Upload'}
          </Upload>
          <h2>Like and reply</h2>
          <Space align="start" size="large">
            <Likes onChange={data => console.log('data', data)} />
            <Reply onChange={data => console.log('data', data)} />
          </Space>
        </Card>

        <Card title="Form" style={style.card}>
          <Form
            onFinish={data => console.log('submit data', data)}
            onValuesChange={data => console.log(data)}
          >
            <FormInput name="name" label="name" />
            <FormInput name="nickname" label="nickname" />
            <Button type="primary" htmlType="submit">
              submit
            </Button>
          </Form>
        </Card>
        <Card title="Table" style={style.card}>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            style={style.table}
          />
        </Card>
      </Content>
    </>
  )
}

export default GuidePage
