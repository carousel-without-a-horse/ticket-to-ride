export type TSettings = {
  id: TId
  userId: TId
  themeId?: TId
  langId?: TId
}

type TSettingsUpdateDto = {
  themeId?: TId
  langId?: TId
}

export type TSettingsService = {
  read: () => Promise<TSettings>
  update: (data: TSettingsUpdateDto) => Promise<TSettings>
}
