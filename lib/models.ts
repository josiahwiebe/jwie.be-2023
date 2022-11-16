import { Status } from '.prisma/client'

export type SelectFields<T> = {
  [K in keyof T]?: true
}

export type StatusItem = Pick<Status, 'id' | 'content' | 'published'>
