type TValues = Record<string, unknown>

export type TThemeForm = {
  title: string
  initialValues?: TValues
  buttonSubmitText?: string | null
  onSubmit: (values: TValues) => void
}
