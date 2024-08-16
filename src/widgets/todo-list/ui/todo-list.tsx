import type { ITodo } from "@/entities/todo"
import type { FC } from "react"

import { TodoItem } from "@/entities/todo"
import { ChangeTodo } from "@/features/change-todo"
import { ChangeTodoStatus } from "@/features/change-todo-status"
import { DeleteTodo } from "@/features/delete-todo"
import { Card } from "@nextui-org/react"

interface IProps {
  todos: ITodo[]
}

export const TodoList: FC<IProps> = ({ todos }) => {
  if (todos.length === 0) {
    return null
  }

  return (
    <Card shadow="sm" radius="sm" className="overflow-auto">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          changeStatus={<ChangeTodoStatus todo={todo} />}
          actions={
            <div className="flex gap-4">
              <ChangeTodo todo={todo} />
              <DeleteTodo todo={todo} />
            </div>
          }
        />
      ))}
    </Card>
  )
}
