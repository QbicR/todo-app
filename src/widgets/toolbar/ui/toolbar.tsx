import type { TTodoStatus } from "@/entities/todo"
import type { FC } from "react"

import { AddTodo } from "@/features/add-todo"
import { FilterTodo } from "@/features/filter-todo"

interface IProps {
  setFilterValue: (status: TTodoStatus) => void
}

export const Toolbar: FC<IProps> = ({ setFilterValue }) => {
  return (
    <div className="flex justify-between gap-4">
      <FilterTodo setFilterValue={setFilterValue} />
      <AddTodo />
    </div>
  )
}
