import { IsNumberString, IsOptional } from 'class-validator'

export class TopicGetAllDto {
  @IsNumberString({}, { message: 'Значение должно быть строковым числом' })
  @IsOptional()
  cursor?: string
}
