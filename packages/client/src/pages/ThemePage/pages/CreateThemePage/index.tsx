import ThemeForm from '../../ui/ThemeForm'

const CreateThemePage = () => {
  return (
    <ThemeForm
      title="Новая тема"
      buttonSubmitText="Создать"
      onSubmit={data => {
        console.log(data)
      }}
    />
  )
}

export default CreateThemePage
