export type TSetTrue = () => void
export type TSetFalse = () => void
export type TToggle = () => void

export type TUseToggle = (defaultState: boolean) => {
  state: boolean
  toggle: TToggle
  setTrue: TSetTrue
  setFalse: TSetFalse
}
