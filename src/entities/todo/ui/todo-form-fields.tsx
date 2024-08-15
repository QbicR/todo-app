import type { FC } from "react"

import { TextField } from "@/shared/ui"
import { useFormContext } from "react-hook-form"

export interface ITodoFormValues {
  name: string
  description: string
}

interface IProps {
  isDisabled: boolean
}

export const TodoFormFields: FC<IProps> = ({ isDisabled: isDisabled }) => {
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
        isDisabled={isDisabled}
        isRequired
      />
      <TextField
        label="Комментарий"
        placeholder="Введите комментарий"
        errorMessage={errors.description?.message}
        {...register("description")}
        isDisabled={isDisabled}
      />
    </>
  )
}
