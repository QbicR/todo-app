import type { SubmitHandler } from "react-hook-form"

import { Button, SearchIcon, TextField } from "@/shared/ui"
import { useForm } from "react-hook-form"

interface ISearchValues {
  searchQuery: string
}

const INITIAL_VALUES: ISearchValues = { searchQuery: "" }

export const FindTodo = () => {
  const { register, handleSubmit } = useForm<ISearchValues>({
    defaultValues: INITIAL_VALUES,
  })

  const handleFormSubmit: SubmitHandler<ISearchValues> = () => {}

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
        {...register("searchQuery")}
      />
      <Button type="submit">Найти</Button>
    </form>
  )
}
