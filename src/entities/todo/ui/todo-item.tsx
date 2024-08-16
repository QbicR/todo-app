import type { ReactElement } from "react"

import { type FC } from "react"
import { twMerge } from "tailwind-merge"

import type { ITodo } from "../types"

interface IProps {
  todo: ITodo
  changeStatus?: ReactElement
  actions?: ReactElement
}

export const TodoItem: FC<IProps> = ({ todo, changeStatus, actions }) => {
  const { name, description, status } = todo

  const isCompleted = status === "completed"

  return (
    <div
      className={twMerge(
        "flex items-center gap-4 border-b border-blue-300 px-4 py-2 last:border-none",
        isCompleted ? "bg-blue-100/50" : "bg-blue-100",
      )}
    >
      {changeStatus}
      <div className="flex grow items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <label
            className={twMerge("leading-tight", isCompleted && "line-through")}
          >
            {name}
          </label>
          <p className="leading-tight text-gray-500">{description}</p>
        </div>
        {actions}
      </div>
    </div>
  )
}
