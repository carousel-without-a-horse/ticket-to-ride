import { Form, FormInput } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import userServices from '@/shared/services/userServices'

const PasswordForm = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    oldPassword: '',
    newPassword: '',
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
      .changeUserPassword(form)
      .then(console.debug)
      .catch(console.error)
  }

  return (
    <Form layout="vertical" style={{ minWidth: '30vw' }} onFinish={onFinish}>
      <FormInput
        initialValue={form.oldPassword}
        onChange={e => handleChange(e)}
        label="Старый пароль"
        name="oldPassword"
        inputType="password"
        rules={[
          { required: true, message: 'Пожалуйста, введите ваш старый пароль' },
        ]}
      />
      <FormInput
        initialValue={form.newPassword}
        onChange={e => handleChange(e)}
        label="Пароль"
        name="newPassword"
        inputType="password"
        rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль' }]}
      />
      <FormInput
        name="repeatPassword"
        label="Подтвердите пароль"
        inputType="password"
        rules={[
          { required: true, message: 'Пожалуйста, повторите ваш пароль' },
        ]}
      />
      <Button type="primary" htmlType="submit">
        Сохранить
      </Button>
      <Button type="link" onClick={() => navigate(-1)}>
        &lt; Назад
      </Button>
    </Form>
  )
}

export { PasswordForm }
