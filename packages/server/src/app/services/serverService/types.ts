export type TRender = (props: {
  url: string
  initialState: Record<string, any> | null
  isPlainStyle: boolean
}) => Promise<{
  html: string
  style: string
}>
