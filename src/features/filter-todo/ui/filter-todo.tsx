import type { TTodoStatus } from "@/entities/todo"
import type { ChangeEvent, FC } from "react"

import { Select, SelectItem } from "@nextui-org/react"
import { useState } from "react"

interface ISelectOption {
  label: string
  value: TTodoStatus
}

const options: ISelectOption[] = [
  { label: "Все дела", value: "" },
  { label: "Выполненные", value: "completed" },
  { label: "Не выполненные", value: "active" },
]

interface IProps {
  setFilterValue: (status: TTodoStatus) => void
}

export const FilterTodo: FC<IProps> = ({ setFilterValue }) => {
  const [selectValue, setSelectValue] = useState<TTodoStatus>("")

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value as TTodoStatus)
    setFilterValue(e.target.value as TTodoStatus)
  }

  return (
    <Select
      aria-label="Все дела"
      selectedKeys={[selectValue]}
      disabledKeys={[selectValue]}
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
