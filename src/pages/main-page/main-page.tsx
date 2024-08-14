import { FindTodo } from "@/features/find-todo"
import { ContentTemplate } from "@/shared/ui"
import { TodoList } from "@/widgets/todo-list"

export const MainPage = () => {
  return (
    <ContentTemplate title="Мои задачи">
      <div className="flex h-full flex-col gap-8">
        <h1>Мои задачи</h1>
        <FindTodo />
        <TodoList />
      </div>
    </ContentTemplate>
  )
}
