import { Form, FormInput } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import { user } from './data'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import userServices from '@/shared/services/userServices'
import type { TUpload, TUploadFile } from '@/shared/ui/Upload'
import { Upload } from '@/shared/ui/Upload'
import { Space } from '@/shared/ui/Space'

const ProfileForm = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: user.first_name,
    secondName: user.second_name,
    login: user.login,
    email: user.email,
    phone: user.phone,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(nextFormState)
  }

  const onFinish = () => {
    userServices
      .changeUserProfile(form)
      .then(console.debug)
      .catch(console.error)
  }

  const [fileList, setFileList] = useState<TUploadFile[]>([])

  const handleChangeAvatar: TUpload['onChange'] = ({ fileList }) => {
    setFileList(fileList)
    userServices
      .changeAvatar(fileList[0])
      .then(console.debug)
      .catch(console.error)
  }

  return (
    <Form layout="vertical" style={{ minWidth: '30vw' }} onFinish={onFinish}>
      <Space direction="horizontal">
        <div>
          <FormInput
            initialValue={form.firstName}
            onChange={e => handleChange(e)}
            label="Имя"
            name="firstName"
            rules={[
              { required: true, message: 'Пожалуйста, введите ваше имя' },
            ]}
          />
          <FormInput
            initialValue={form.secondName}
            onChange={e => handleChange(e)}
            label="Фамилия"
            name="secondName"
          />
          <FormInput
            initialValue={form.login}
            onChange={e => handleChange(e)}
            label="Логин"
            name="login"
            rules={[
              { required: true, message: 'Пожалуйста, введите ваш логин' },
            ]}
          />
          <FormInput
            initialValue={form.email}
            onChange={e => handleChange(e)}
            label="Почта"
            name="email"
            type="email"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите вашу электронную почту',
              },
            ]}
          />
          <FormInput
            initialValue={form.phone}
            onChange={e => handleChange(e)}
            label="Телефон"
            name="phone"
            type="tel"
            rules={[
              { required: true, message: 'Пожалуйста, введите ваш телефон' },
            ]}
          />
        </div>
        <div>
          <Upload
            name="avatar"
            listType="picture-card"
            accept={'image/png, image/jpeg'}
            fileList={fileList}
            onChange={handleChangeAvatar}
            maxCount={1}
          >
            {fileList.length < 1 && '+ Upload'}
          </Upload>
        </div>
      </Space>
      <div>
        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
        <Button type="link" onClick={() => navigate(-1)}>
          &lt; Назад
        </Button>
      </div>
    </Form>
  )
}

export { ProfileForm }
