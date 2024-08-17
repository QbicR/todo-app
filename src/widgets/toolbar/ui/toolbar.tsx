import type { TTodoStatus } from "@/entities/todo"

import { AddTodo } from "@/features/add-todo"
import { FilterTodo } from "@/features/filter-todo"
import { memo, type FC } from "react"

interface IProps {
  setFilterValue: (status: TTodoStatus) => void
}

export const Toolbar: FC<IProps> = memo(({ setFilterValue }) => {
  return (
    <div className="flex justify-between gap-4">
      <FilterTodo setFilterValue={setFilterValue} />
      <AddTodo />
    </div>
  )
})
