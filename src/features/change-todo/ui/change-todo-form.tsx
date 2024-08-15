import type { ITodo, ITodoFormValues } from "@/entities/todo"
import type { FC } from "react"
import type { SubmitHandler } from "react-hook-form"

import { TODO_FORM_VALIDATION_SCHEME, TodoFormFields } from "@/entities/todo"
import { Button } from "@/shared/ui"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormProvider, useForm } from "react-hook-form"

interface IProps {
  todo: ITodo
  onSubmit: () => void
}

export const ChangeTodoForm: FC<IProps> = ({ todo, onSubmit }) => {
  const INITIAL_VALUES: ITodoFormValues = {
    name: todo.name || "",
    description: todo.description || "",
  }

  const methods = useForm<ITodoFormValues>({
    defaultValues: INITIAL_VALUES,
    resolver: yupResolver(TODO_FORM_VALIDATION_SCHEME),
  })

  const {
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = methods

  const handleFormSubmit: SubmitHandler<ITodoFormValues> = () => {
    try {
      onSubmit()
    } catch {
      setError("root", { message: "Что-то пошло не так. Попробуйте еще раз." })
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        <div className="flex flex-col gap-6 px-6 py-4">
          <TodoFormFields idDisabled={false} />
        </div>
        <div className="flex items-center justify-end gap-4 px-6 py-4">
          {errors.root && (
            <p className="text-sm text-red-500">{errors.root.message}</p>
          )}
          <Button
            type="submit"
            size="md"
            isDisabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Сохранить
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
