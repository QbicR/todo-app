import type { ChangeEvent } from "react"

import { Select, SelectItem } from "@nextui-org/react"
import { useState } from "react"

interface ISelectOption {
  label: string
  value: string
}

const options: ISelectOption[] = [
  { label: "Все задачи", value: "all" },
  { label: "Выполненные", value: "completed" },
  { label: "Не выполненные", value: "uncompleted" },
]

export const FilterTodo = () => {
  const [selectValue, setSelectValue] = useState("all")

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value)
  }

  return (
    <Select
      aria-label="Все задачи"
      selectedKeys={[selectValue]}
      onChange={handleSelectionChange}
      size="lg"
      color="default"
      className="w-52"
      radius="sm"
    >
      {options.map(option => (
        <SelectItem key={option.value}>{option.label}</SelectItem>
      ))}
    </Select>
  )
}
