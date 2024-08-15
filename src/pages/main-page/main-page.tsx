import { FindTodo } from "@/features/find-todo"
import { request } from "@/shared/api"
import { ContentTemplate } from "@/shared/ui"
import { TodoList } from "@/widgets/todo-list"
import { useEffect } from "react"

export const MainPage = () => {
  useEffect(() => {
    request("get", "/todos", {}).then(res => res.data)
  }, [])

  return (
    <ContentTemplate title="Мои дела">
      <div className="flex h-full flex-col gap-8">
        <h1>Мои дела</h1>
        <FindTodo />
        <TodoList />
      </div>
    </ContentTemplate>
  )
}
