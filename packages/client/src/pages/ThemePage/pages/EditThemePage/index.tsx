import ThemeForm from '../../ui/ThemeForm'
import { data as initialValues } from '../../data'

const EditThemePage = () => {
  return (
    <ThemeForm
      title="Редактирование темы"
      initialValues={initialValues}
      onSubmit={data => {
        console.log(data)
      }}
    />
  )
}

export default EditThemePage
