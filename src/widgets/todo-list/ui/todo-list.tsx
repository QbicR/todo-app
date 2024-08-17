import type { ITodo } from "@/entities/todo"

import { TodoItem } from "@/entities/todo"
import { ChangeTodo } from "@/features/change-todo"
import { ChangeTodoStatus } from "@/features/change-todo-status"
import { DeleteTodo } from "@/features/delete-todo"
import { PER_PAGE_LIMIT } from "@/shared/constants"
import { EmptyMessage, OverlayLoader } from "@/shared/ui"
import { Fragment, type FC } from "react"
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
      if (inView) {
        handleChangeLimit(PER_PAGE_LIMIT)
      }
    },
  })

  const showEmptyMssage = todos.length === 0 && !isFetching

  return (
    <div className="relative h-full overflow-auto">
      {isFetching && <OverlayLoader />}
      {showEmptyMssage ? (
        <EmptyMessage />
      ) : (
        <div className="absolute top-0 h-fit w-full">
          {todos.map((todo, index) => (
            <Fragment key={index}>
              <TodoItem
                todo={todo}
                changeStatus={<ChangeTodoStatus todo={todo} />}
                actions={
                  <div className="flex gap-4">
                    <ChangeTodo todo={todo} />
                    <DeleteTodo todo={todo} />
                  </div>
                }
              />
              <div ref={ref} />
            </Fragment>
          ))}
        </div>
      )}
    </div>
  )
}
