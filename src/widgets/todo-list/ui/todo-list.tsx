import type { ITodo } from "@/entities/todo"
import type { FC } from "react"

import { TodoItem } from "@/entities/todo"
import { ChangeTodo } from "@/features/change-todo"
import { ChangeTodoStatus } from "@/features/change-todo-status"
import { DeleteTodo } from "@/features/delete-todo"
import { EmptyMessage, OverlayLoader } from "@/shared/ui"

interface IProps {
  todos: ITodo[]
  isFetching: boolean
}

export const TodoList: FC<IProps> = ({ todos, isFetching }) => {
  const showEmptyMssage = todos.length === 0 && !isFetching

  return (
    <div className="relative h-full overflow-auto">
      {isFetching && <OverlayLoader />}
      {showEmptyMssage ? (
        <EmptyMessage />
      ) : (
        <div className="absolute top-0 h-fit w-full">
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
        </div>
      )}
    </div>
  )
}
