type TValues = Record<string, unknown>

export type TThemeForm = {
  title: string
  initialValues?: TValues
  buttonSubmitText?: string
  onSubmit: (values: TValues) => void
}
