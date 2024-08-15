import type { ITodo, TTodoStatus } from "@/entities/todo"
import type { FC } from "react"

import { TodoItem } from "@/entities/todo"
import { AddTodo } from "@/features/add-todo"
import { ChangeTodo } from "@/features/change-todo"
import { DeleteTodo } from "@/features/delete-todo"
import { FilterTodo } from "@/features/filter-todo"
import { Card } from "@nextui-org/react"

interface IProps {
  todos: ITodo[]
  setFilterValue: (status: TTodoStatus) => void
}

export const TodoList: FC<IProps> = ({ todos, setFilterValue }) => {
  return (
    <div className="-m-2 flex h-fit flex-col gap-4 overflow-hidden p-2">
      <div className="flex justify-between gap-4">
        <FilterTodo setFilterValue={setFilterValue} />
        <AddTodo />
      </div>
      <Card shadow="sm" radius="sm" className="overflow-auto">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            actions={
              <div className="flex gap-4">
                <ChangeTodo todo={todo} />
                <DeleteTodo todo={todo} />
              </div>
            }
          />
        ))}
      </Card>
    </div>
  )
}
