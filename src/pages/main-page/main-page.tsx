import { AddTodo } from "@/features/add-todo"
import { FilterTodo } from "@/features/filter-todo"
import { FindTodo } from "@/features/find-todo"
import { ContentTemplate, Heading } from "@/shared/ui"

export const MainPage = () => {
  return (
    <ContentTemplate title="Мои задачи">
      <div className="flex flex-col gap-8">
        <Heading className="text-3xl font-medium">Мои задачи</Heading>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <FindTodo />
          </div>
          <div className="flex gap-4">
            <AddTodo />
            <FilterTodo />
          </div>
        </div>
        <div className="flex h-52 w-full bg-gray-300"></div>
      </div>
    </ContentTemplate>
  )
}
