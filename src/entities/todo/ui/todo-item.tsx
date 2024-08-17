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
        "flex items-start gap-6 border-b border-default-400 px-6 py-4 last:border-none",
        isCompleted ? "bg-default-200/50" : "bg-default-200",
      )}
    >
      {changeStatus}
      <div className="flex grow items-start justify-between gap-6">
        <div className="flex flex-col gap-2">
          <label
            className={twMerge(
              "leading-tight text-foreground-600",
              isCompleted && "line-through",
            )}
          >
            {name}
          </label>
          {description && (
            <p className="leading-tight text-foreground-500">{description}</p>
          )}
        </div>
        {actions}
      </div>
    </div>
  )
}
