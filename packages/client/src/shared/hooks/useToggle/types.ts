export type TToggleFunc = () => void

export type TUseToggle = (defaultState: boolean) => {
  state: boolean
  toggle: TToggleFunc
  setTrue: TToggleFunc
  setFalse: TToggleFunc
}
