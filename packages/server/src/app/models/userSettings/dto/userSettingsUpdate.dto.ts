import { IsNumber, IsOptional } from 'class-validator'

export class UserSettingsUpdateDto {
  @IsNumber({ allowNaN: true }, { message: 'Значение должно быть числом' })
  @IsOptional()
  themeId?: number

  @IsNumber({ allowNaN: true }, { message: 'Значение должно быть числом' })
  @IsOptional()
  langId?: number
}
