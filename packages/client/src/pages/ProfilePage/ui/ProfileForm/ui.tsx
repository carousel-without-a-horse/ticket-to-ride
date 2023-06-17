import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { LOCAL_STORAGE_KEYS } from '@/shared/constants/localStorage'
import { useStore } from '@/shared/store'
import { Form, FormInput } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import userServices from '@/shared/services/userServices'
import { Upload } from '@/shared/ui/Upload'
import { Space } from '@/shared/ui/Space'
import { useForm } from '@/shared/hooks'

import { user } from './data'
import schema from './schema'

import type { TUpload, TUploadFile } from '@/shared/ui/Upload'
import type { TUseForm } from './types'

const ProfileForm = () => {
  const { userStore } = useStore()
  const navigate = useNavigate()

  const [fileList, setFileList] = useState<TUploadFile[]>([])

  const handleChangeAvatar: TUpload['onChange'] = ({ fileList }) => {
    setFileList(fileList)
    userServices
      .changeAvatar(fileList[0])
      .then(console.debug)
      .catch(console.error)
  }

  const handleLogOut = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.userLogin)
    userStore.setLogin('')
  }

  const formProps = useForm<TUseForm>({
    name: 'profile',
    schema,
    onSubmit: data => {
      if (data) {
        userServices
          .changeUserProfile(data)
          .then(console.debug)
          .catch(console.error)
      }
    },
  })

  return (
    <Space direction="horizontal">
      <Form layout="vertical" style={{ minWidth: '30vw' }} {...formProps}>
        <FormInput
          initialValue={user.first_name}
          label="Имя"
          name="firstName"
        />
        <FormInput
          initialValue={user.second_name}
          label="Фамилия"
          name="secondName"
        />
        <FormInput initialValue={user.login} label="Логин" name="login" />
        <FormInput
          initialValue={user.email}
          label="Почта"
          name="email"
          type="email"
        />
        <FormInput
          initialValue={user.phone}
          label="Телефон"
          name="phone"
          type="tel"
        />
        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
        <Button type="link" onClick={() => navigate(-1)}>
          &lt; Назад
        </Button>
        <Button danger onClick={handleLogOut}>
          Выйти
        </Button>
      </Form>
      <div>
        <Upload
          name="avatar"
          listType="picture-card"
          accept="image/png, image/jpeg"
          fileList={fileList}
          onChange={handleChangeAvatar}
          maxCount={1}
        >
          {fileList.length < 1 && '+ Upload'}
        </Upload>
      </div>
    </Space>
  )
}

export { ProfileForm }
