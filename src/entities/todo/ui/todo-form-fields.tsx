import { TextField } from "@/shared/ui"
import { useFormContext } from "react-hook-form"

export interface ITodoFormValues {
  name: string
  description: string
}

export const TodoFormFields = () => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext<ITodoFormValues>()

  return (
    <>
      <TextField
        label="Наименование"
        placeholder="Ведите наименование"
        errorMessage={errors.name?.message}
        {...register("name")}
        isDisabled={isSubmitting}
        isRequired
      />
      <TextField
        label="Комментарий"
        placeholder="Введите комментарий"
        errorMessage={errors.description?.message}
        {...register("description")}
        isDisabled={isSubmitting}
      />
    </>
  )
}
