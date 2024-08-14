import type { FC } from "react"

import { DeleteIcon, PenIcon } from "@/shared/ui"
import { Button, Checkbox, Tooltip } from "@nextui-org/react"
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
        "flex items-center gap-4 border-b border-gray-500 px-4 py-2 last:border-none",
        completed ? "bg-blue-100/50" : "bg-blue-100",
      )}
    >
      <Checkbox isSelected={completed} size="lg" color="primary" />
      <div className="flex grow items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <label className="leading-tight">{name}</label>
          <p className="leading-tight text-gray-500">{description}</p>
        </div>
        <div className="flex gap-4">
          <Tooltip placement="bottom" content="Изменить" closeDelay={100}>
            <Button
              isIconOnly
              variant="light"
              size="sm"
              radius="full"
              isDisabled={completed}
            >
              <PenIcon className="scale-85" />
            </Button>
          </Tooltip>
          <Tooltip placement="bottom" content="Удалить" closeDelay={100}>
            <Button isIconOnly variant="light" size="sm" radius="full">
              <DeleteIcon className="scale-85" />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
