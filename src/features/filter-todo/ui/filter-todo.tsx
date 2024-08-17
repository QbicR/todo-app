import type { TTodoStatus } from "@/entities/todo"
import type { ChangeEvent, FC } from "react"

import { Select, SelectItem } from "@nextui-org/react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

interface ISelectOption {
  label: string
  value: TTodoStatus
}

interface IProps {
  setFilterValue: (status: TTodoStatus) => void
}

export const FilterTodo: FC<IProps> = ({ setFilterValue }) => {
  const [selectValue, setSelectValue] = useState<TTodoStatus>("")
  const { t } = useTranslation()

  const OPTIONS: ISelectOption[] = [
    { label: t("select.all"), value: "" },
    { label: t("select.completed"), value: "completed" },
    { label: t("select.active"), value: "active" },
  ]

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value as TTodoStatus)
    setFilterValue(e.target.value as TTodoStatus)
  }

  return (
    <Select
      aria-label="select"
      selectedKeys={[selectValue]}
      disabledKeys={[selectValue]}
      onChange={handleSelectionChange}
      size="lg"
      color="default"
      className="w-52 text-foreground-600"
      radius="sm"
      classNames={{
        trigger: "bg-default-200",
        value: "group-data-[has-value=true]:text-foreground-600",
        popoverContent: "bg-default-200",
        listbox: "text-foreground-600",
      }}
    >
      {OPTIONS.map(option => (
        <SelectItem key={option.value}>{option.label}</SelectItem>
      ))}
    </Select>
  )
}
