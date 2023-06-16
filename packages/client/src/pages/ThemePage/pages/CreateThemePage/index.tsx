import { useTranslation } from 'react-i18next'

import ThemeForm from '../../ui/ThemeForm'

const CreateThemePage = () => {
  const { t } = useTranslation()
  return (
    <ThemeForm
      title={t('theme.titles.newTheme')}
      buttonSubmitText={t('theme.form.create')}
      onSubmit={data => {
        console.log(data)
      }}
    />
  )
}

export default CreateThemePage
