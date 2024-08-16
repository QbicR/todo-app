import type { ITodo, ITodoFormValues } from "@/entities/todo"
import type { FC } from "react"
import type { SubmitHandler } from "react-hook-form"

import { TODO_FORM_VALIDATION_SCHEME, TodoFormFields } from "@/entities/todo"
import { SOMETHINK_WENT_WRONG } from "@/shared/constants"
import { Button } from "@/shared/ui"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormProvider, useForm } from "react-hook-form"

import { useChangeTodo } from "../models"

interface IProps {
  todo: ITodo
  onSubmit: () => void
}

export const ChangeTodoForm: FC<IProps> = ({ todo, onSubmit }) => {
  const { mutate, status } = useChangeTodo()

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
    formState: { errors },
  } = methods

  const handleFormSubmit: SubmitHandler<ITodoFormValues> = ({
    name,
    description,
  }) => {
    try {
      mutate(
        {
          id: todo.id!,
          todo: { ...todo, name, description },
        },
        {
          onSuccess: () => {
            onSubmit()
          },
          onError: () => {
            setError("root", {
              message: SOMETHINK_WENT_WRONG,
            })
          },
        },
      )
    } catch {
      setError("root", { message: SOMETHINK_WENT_WRONG })
    }
  }

  const isDisabled = status === "loading"

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        <div className="flex flex-col gap-6 px-6 py-4">
          <TodoFormFields isDisabled={isDisabled} />
        </div>
        <div className="flex items-center justify-end gap-4 px-6 py-4">
          {errors.root && (
            <p className="text-sm text-red-500">{errors.root.message}</p>
          )}
          <Button
            type="submit"
            size="md"
            isDisabled={isDisabled}
            isLoading={isDisabled}
          >
            Сохранить
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
