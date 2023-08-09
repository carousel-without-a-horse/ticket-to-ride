import { httpService } from '@/shared/services/httpService'

import type { TSettingsService, TSettings } from './types'

export const settingsServices: TSettingsService = {
  read: () => {
    return httpService.get<TSettings>('/settings').then(res => res.data)
  },
  update: data => {
    return httpService.put<TSettings>('/settings', data).then(res => res.data)
  },
}
