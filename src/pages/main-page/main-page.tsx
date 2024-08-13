import {
  Button,
  ContentTemplate,
  Heading,
  ISelectOption,
  Select,
  TextField,
} from "@/shared/ui"

import { useState } from "react"

const options: ISelectOption[] = [
  { label: "Все дела", value: "all" },
  { label: "Выполненные", value: "completed" },
  { label: "Не выполненные", value: "uncompleted" },
]

export const MainPage = () => {
  const [selectValue, setSelectValue] = useState("")

  return (
    <ContentTemplate title="Мои дела">
      <div className="flex flex-col gap-8">
        <Heading className="text-3xl font-medium">Мои дела</Heading>
        <div className="flex gap-4">
          <form className="flex w-full gap-4" noValidate>
            <TextField placeholder="Поиск" />
            <Button type="submit">Найти</Button>
          </form>
          <Select
            options={options}
            value={selectValue}
            onChange={value => setSelectValue(value)}
            size={"medium"}
          />
          <Button type="button">Добавить</Button>
        </div>
      </div>
    </ContentTemplate>
  )
}
