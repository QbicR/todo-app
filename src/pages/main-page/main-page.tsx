import { TODO_LIST, TodoItem } from "@/entities/todo"
import { AddTodo } from "@/features/add-todo"
import { FilterTodo } from "@/features/filter-todo"
import { FindTodo } from "@/features/find-todo"
import { ContentTemplate, Heading } from "@/shared/ui"

export const MainPage = () => {
  return (
    <ContentTemplate title="Мои задачи">
      <div className="flex h-full flex-col gap-8">
        <Heading className="text-center text-3xl font-medium">
          Мои задачи
        </Heading>
        <FindTodo />
        <div className="flex h-fit flex-col gap-4 overflow-hidden">
          <div className="flex justify-between gap-4">
            <FilterTodo />
            <AddTodo />
          </div>
          <div className="overflow-auto">
            {TODO_LIST.map((todo, index) => (
              <TodoItem key={index} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </ContentTemplate>
  )
}
