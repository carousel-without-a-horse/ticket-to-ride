import type { UserSettings } from '../../../models/userSettings'

export async function getInitialState(
  getUserSettings: (userId: number) => Promise<UserSettings>,
  user?: TUser,
): Promise<Record<string, any>> {
  let settings: UserSettings | null = null
  if (user?.id) {
    settings = await getUserSettings(user.id)
  }

  return {
    user: user || null,
    settings: settings
      ? { themeId: settings?.themeId, langId: settings?.langId }
      : null,
  }
}
