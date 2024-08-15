import { useGetAndFilterTodos } from "@/entities/todo"
import { FindTodo } from "@/features/find-todo"
import { ContentTemplate } from "@/shared/ui"
import { TodoList } from "@/widgets/todo-list"
import { Toolbar } from "@/widgets/toolbar"

export const MainPage = () => {
  const { data, handleChangeSearch, handleChangeStatus } =
    useGetAndFilterTodos()

  return (
    <ContentTemplate title="Мои дела">
      <div className="flex h-full flex-col gap-8">
        <h1>Мои дела</h1>
        <FindTodo setSearchValue={handleChangeSearch} />
        <div className="-m-2 flex h-fit flex-col gap-4 overflow-hidden p-2">
          <Toolbar setFilterValue={handleChangeStatus} />
          <TodoList todos={data || []} />
        </div>
      </div>
    </ContentTemplate>
  )
}
