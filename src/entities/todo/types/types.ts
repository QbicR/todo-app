export interface ITodo {
  id: string | number
  name: string | null
  description: string | null
  status: "active" | "completed"
}
