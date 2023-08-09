import { IsNumberString, IsOptional, IsBooleanString } from 'class-validator'

export class TopicGetAllDto {
  @IsNumberString({}, { message: 'Значение должно быть строковым числом' })
  @IsOptional()
  cursor?: string

  @IsBooleanString()
  @IsOptional()
  isMy?: string
}
