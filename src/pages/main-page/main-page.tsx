import { useGetAndFilterTodos } from "@/entities/todo/models"
import { FindTodo } from "@/features/find-todo"
import { ContentTemplate } from "@/shared/ui"
import { TodoList } from "@/widgets/todo-list"

export const MainPage = () => {
  const { data, handleChangeSearch, handleChangeStatus } =
    useGetAndFilterTodos()

  return (
    <ContentTemplate title="Мои дела">
      <div className="flex h-full flex-col gap-8">
        <h1>Мои дела</h1>
        <FindTodo setSearchValue={handleChangeSearch} />
        <TodoList setFilterValue={handleChangeStatus} todos={data || []} />
      </div>
    </ContentTemplate>
  )
}
