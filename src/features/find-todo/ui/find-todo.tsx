import type { FC } from "react"
import type { SubmitHandler } from "react-hook-form"

import { Button, SearchIcon, TextField } from "@/shared/ui"
import { useForm } from "react-hook-form"

interface ISearchValues {
  searchQuery: string
}

const INITIAL_VALUES: ISearchValues = { searchQuery: "" }

interface IProps {
  setSearchValue: (search: string) => void
}

export const FindTodo: FC<IProps> = ({ setSearchValue }) => {
  const { register, handleSubmit } = useForm<ISearchValues>({
    defaultValues: INITIAL_VALUES,
  })

  const handleFormSubmit: SubmitHandler<ISearchValues> = values => {
    setSearchValue(values.searchQuery)
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex w-full gap-4"
      noValidate
    >
      <TextField
        placeholder="Поиск"
        size="lg"
        startContent={<SearchIcon className="shrink-0 scale-85" />}
        onClear={() => setSearchValue("")}
        {...register("searchQuery")}
        isClearable
      />
      <Button type="submit">Найти</Button>
    </form>
  )
}
