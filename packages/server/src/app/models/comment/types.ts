import type { BaseController } from '../../common/BaseController'
import type { CommentCreateDto } from './dto'
import type { Comment } from './CommentModel'
import type { IRestApiController } from '../../common/types'

export type TCommentController = BaseController &
  Required<Pick<IRestApiController, 'create' | 'delete'>>

export interface ICommentService {
  create: (dto: CommentCreateDto, userId: number) => Promise<Comment | false>
  read: (id: number) => Promise<Comment | false>
  delete: (id: number) => Promise<boolean>
}

export interface ICommentRepository {
  create: (dto: CommentCreateDto, userId: number) => Promise<Comment>
  read: (id: number) => Promise<Comment | false>
  delete: (id: number) => Promise<boolean>
}

export type TObject = Record<string, unknown>
