export interface ITodo {
  id?: number
  name: string
  description: string
  status: TTodoStatus
}

export interface IFetchTodosParams {
  search?: string
  status?: TTodoStatus
}

export type TTodoStatus = "active" | "completed" | ""
