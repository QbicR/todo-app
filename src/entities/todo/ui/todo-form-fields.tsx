import type { FC } from "react"

import { TextField } from "@/shared/ui"
import { useFormContext } from "react-hook-form"

export interface ITodoFormValues {
  name: string
  description: string
}

interface IProps {
  idDisabled: boolean
}

export const TodoFormFields: FC<IProps> = ({ idDisabled }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ITodoFormValues>()

  return (
    <>
      <TextField
        label="Наименование"
        placeholder="Ведите наименование"
        errorMessage={errors.name?.message}
        {...register("name")}
        isDisabled={idDisabled}
        isRequired
      />
      <TextField
        label="Комментарий"
        placeholder="Введите комментарий"
        errorMessage={errors.description?.message}
        {...register("description")}
        isDisabled={idDisabled}
      />
    </>
  )
}
