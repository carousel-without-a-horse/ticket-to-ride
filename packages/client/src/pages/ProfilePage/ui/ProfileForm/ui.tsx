import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import authServices from '@/shared/services/authServices'
import { Form, FormInput } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import userServices from '@/shared/services/userServices'
import { Upload } from '@/shared/ui/Upload'
import { Space } from '@/shared/ui/Space'
import { useForm } from '@/shared/hooks'
import { store, useStore } from '@/shared/store'
import { ROUTES } from '@/app/router/config'
import { error, success } from '@/shared/utils/notification'
import { REDIRECT_URI } from '@/shared/constants/apiConsts'

import schema from './schema'

import styles from './styles.module.pcss'

import type { TError } from '@/shared/types/error'
import type { AxiosError } from 'axios'
import type { TUpload, TUploadFile } from '@/shared/ui/Upload'
import type { TUseForm } from './types'

const ProfileForm = () => {
  const navigate = useNavigate()
  const { userStore } = useStore()

  const [fileList, setFileList] = useState<TUploadFile[]>([])

  const handleChangeAvatar: TUpload['onChange'] = ({ fileList }) => {
    setFileList(fileList)
    if (fileList[0]) {
      const fmData = new FormData()
      fmData.append('avatar', fileList[0].originFileObj as Blob)
      userServices
        .changeAvatar(fmData)
        .then(res => {
          if (res.data.avatar) {
            store.userStore.setUserAvatar(res.data.avatar)
          }
        })
        .catch(() => error())
        .finally(() => {
          setFileList([])
          success()
        })
    }
  }

  const handleLogOut = () => {
    authServices
      .logOut()
      .then(() => {
        userStore.clearUser()
        navigate(ROUTES.signIn)
      })
      .catch((err: AxiosError) => {
        const res = err.response?.data as TError
        error('Error', res?.reason || '')
      })
  }

  const formProps = useForm<TUseForm>({
    name: 'profile',
    schema,
    onSubmit: data => {
      if (data) {
        userServices
          .changeUserProfile({
            first_name: data.firstName,
            second_name: data.secondName,
            email: data.email,
            phone: data.phone,
            login: data.login,
            id: userStore.user?.id as number,
            display_name: `${userStore.user?.first_name as string} ${
              userStore.user?.second_name as string
            }`,
          })
          .then(console.debug)
          .catch(() => error())
          .finally(() => success())
      }
    },
  })

  return (
    <Space direction="horizontal">
      <Form layout="vertical" className={styles.form} {...formProps}>
        <FormInput
          initialValue={userStore.user?.first_name}
          label="Имя"
          name="firstName"
        />
        <FormInput
          initialValue={userStore.user?.second_name}
          label="Фамилия"
          name="secondName"
        />
        <FormInput
          initialValue={userStore.user?.login}
          label="Логин"
          name="login"
        />
        <FormInput
          initialValue={userStore.user?.email}
          label="Почта"
          name="email"
          type="email"
        />
        <FormInput
          initialValue={userStore.user?.phone}
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
          className={styles.upload}
          listType="picture-card"
          accept="image/png, image/jpeg"
          fileList={fileList}
          onChange={handleChangeAvatar}
          maxCount={1}
        >
          {userStore.user?.avatar ? (
            <>
              <img
                src={`${REDIRECT_URI}/api/v2/resources${userStore.user?.avatar}`}
                alt="avatar"
                className={styles.avatar}
              />
              <span className={styles.addAvatar}>Загрузить новый аватар</span>
            </>
          ) : (
            '+ Загрузить'
          )}
        </Upload>
      </div>
    </Space>
  )
}

export { ProfileForm }
