import { IsString, IsNotEmpty } from 'class-validator'

export class TopicCreateOrEditDto {
  @IsString({ message: 'Значение должно быть строкой' })
  @IsNotEmpty({ message: 'Не указан заголовок' })
  title: string

  @IsString({ message: 'Значение должно быть строкой' })
  @IsNotEmpty({ message: 'Не указано содержание' })
  content: string
}
