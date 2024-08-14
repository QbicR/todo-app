import type { ReactElement } from "react"

import { Checkbox } from "@nextui-org/react"
import { useState, type FC } from "react"
import { twMerge } from "tailwind-merge"

import type { ITodo } from "../types"

interface IProps {
  todo: ITodo
  actions?: ReactElement
}

export const TodoItem: FC<IProps> = ({
  todo: { name, description, completed },
  actions,
}) => {
  const [checked, setChecked] = useState<boolean>(completed)

  return (
    <div
      className={twMerge(
        "flex items-center gap-4 border-b border-gray-500 px-4 py-2 last:border-none",
        checked ? "bg-blue-100/50" : "bg-blue-100",
      )}
    >
      <Checkbox
        isSelected={checked}
        onValueChange={setChecked}
        size="lg"
        color="primary"
      />
      <div className="flex grow items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <label
            className={twMerge("leading-tight", checked && "line-through")}
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
