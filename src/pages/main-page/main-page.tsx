import { FindTodo } from "@/features/find-todo"
import { ContentTemplate } from "@/shared/ui"
import { TodoList } from "@/widgets/todo-list"

export const MainPage = () => {
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
