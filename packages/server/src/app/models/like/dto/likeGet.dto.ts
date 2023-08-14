import { IsNotEmpty, IsString, IsNumberString } from 'class-validator'

export class LikeGetDto {
  @IsString({ message: 'Значение должно быть строкой' })
  @IsNotEmpty({ message: 'Не указан тип' })
  type?: string

  @IsNumberString({}, { message: 'Значение должно быть строковым числом' })
  @IsNotEmpty({ message: 'Не указан id' })
  id?: string
}
