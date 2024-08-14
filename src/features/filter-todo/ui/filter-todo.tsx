import type { ISelectOption} from "@/shared/ui";

import { Select } from "@/shared/ui"
import { useState } from "react"

const options: ISelectOption[] = [
  { label: "Все задачи", value: "all" },
  { label: "Выполненные", value: "completed" },
  { label: "Не выполненные", value: "uncompleted" },
]

export const FilterTodo = () => {
  const [selectValue, setSelectValue] = useState<string>("Все задачи")

  return (
    <Select
      options={options}
      value={selectValue}
      onChange={value => setSelectValue(value)}
      size={"medium"}
    />
  )
}
