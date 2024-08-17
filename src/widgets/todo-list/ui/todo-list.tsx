import type { ITodo } from "@/entities/todo"

import { TodoItem } from "@/entities/todo"
import { ChangeTodo } from "@/features/change-todo"
import { ChangeTodoStatus } from "@/features/change-todo-status"
import { DeleteTodo } from "@/features/delete-todo"
import { PER_PAGE_LIMIT, TODO_LIST_ID } from "@/shared/constants"
import { OverlayLoader } from "@/shared/ui"
import { type FC } from "react"
import { useInView } from "react-intersection-observer"

interface IProps {
  todos: ITodo[]
  isFetching: boolean
  handleChangeLimit: (limit: number) => void
}

export const TodoList: FC<IProps> = ({
  todos,
  isFetching,
  handleChangeLimit,
}) => {
  const { ref } = useInView({
    onChange: inView => {
      if (inView && todos.length >= PER_PAGE_LIMIT) {
        handleChangeLimit(PER_PAGE_LIMIT)
      }
    },
  })

  return (
    <div className="relative h-full overflow-auto">
      {isFetching && <OverlayLoader />}
      <div id={TODO_LIST_ID} className="absolute top-0 h-fit w-full">
        {todos.map((todo, index, array) => (
          <TodoItem
            key={index}
            ref={array.length - 1 === index ? ref : null}
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
    </div>
  )
}
