import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'

export class CommentCreateDto {
  @IsString({ message: 'Значение должно быть строкой' })
  @IsNotEmpty({ message: 'Не указано содержание' })
  content: string

  @IsNumber({ allowNaN: true }, { message: 'Значение должно быть числом' })
  @IsOptional()
  parentId?: number

  @IsNumber({ allowNaN: false }, { message: 'Значение должно быть числом' })
  @IsNotEmpty({ message: 'Не указано содержание' })
  topicId: number
}
