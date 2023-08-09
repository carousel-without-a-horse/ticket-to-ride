export type TRender = (props: {
  url: string
  initialState: Record<string, any>
  isPlainStyle: boolean
}) => Promise<{
  html: string
  style: string
}>
