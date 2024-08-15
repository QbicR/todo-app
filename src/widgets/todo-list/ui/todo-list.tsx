import { TODO_LIST, TodoItem } from "@/entities/todo"
import { AddTodo } from "@/features/add-todo"
import { ChangeTodo } from "@/features/change-todo"
import { DeleteTodo } from "@/features/delete-todo"
import { FilterTodo } from "@/features/filter-todo"
import { Card } from "@nextui-org/react"

export const TodoList = () => {
  return (
    <div className="-m-2 flex h-fit flex-col gap-4 overflow-hidden p-2">
      <div className="flex justify-between gap-4">
        <FilterTodo />
        <AddTodo />
      </div>
      <Card shadow="sm" radius="sm" className="overflow-auto">
        {TODO_LIST.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            actions={
              <div className="flex gap-4">
                <ChangeTodo todo={todo} disabled={todo.completed} />
                <DeleteTodo />
              </div>
            }
          />
        ))}
      </Card>
    </div>
  )
}
