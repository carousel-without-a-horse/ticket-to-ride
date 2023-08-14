import { IsNotEmpty, IsString, IsNumber } from 'class-validator'

export class LikeDto {
  @IsString({ message: 'Значение должно быть строкой' })
  @IsNotEmpty({ message: 'Не указан тип' })
  type: string

  @IsNumber({ allowNaN: false }, { message: 'Значение должно быть числом' })
  @IsNotEmpty({ message: 'Не указан id' })
  id: number
}
