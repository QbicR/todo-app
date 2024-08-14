import type { FC } from "react"

import { Button } from "@/shared/ui"
import { twMerge } from "tailwind-merge"

import type { ITodo } from "../types"

interface IProps {
  todo: ITodo
}

export const TodoItem: FC<IProps> = ({ todo }) => {
  const { name, description, completed } = todo

  return (
    <div
      className={twMerge(
        "flex items-start gap-4 border-b border-gray-500 px-4 py-2 last:border-none",
        completed ? "bg-blue-100/50" : "bg-blue-100",
      )}
    >
      <input type="checkbox" checked={completed} />
      <div className="flex grow items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <label className="leading-tight">{name}</label>
          <p className="leading-tight text-gray-500">{description}</p>
        </div>
        <div className="flex gap-4">
          <Button variant={"secondary"}>Изменить</Button>
          <Button variant={"secondary"}>Удалить</Button>
        </div>
      </div>
    </div>
  )
}
