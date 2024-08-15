import type { ITodoFormValues } from "@/entities/todo"
import type { FC } from "react"
import type { SubmitHandler } from "react-hook-form"

import { TODO_FORM_VALIDATION_SCHEME, TodoFormFields } from "@/entities/todo"
import { SOMETHINK_WENT_WRONG } from "@/shared/constants"
import { Button } from "@/shared/ui"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormProvider, useForm } from "react-hook-form"

import { useCreateTodo } from "../models"

const INITIAL_VALUES: ITodoFormValues = {
  name: "",
  description: "",
}

interface IProps {
  onSubmit: () => void
}

export const AddTodoForm: FC<IProps> = ({ onSubmit }) => {
  const { mutate, status } = useCreateTodo()

  const methods = useForm<ITodoFormValues>({
    defaultValues: INITIAL_VALUES,
    resolver: yupResolver(TODO_FORM_VALIDATION_SCHEME),
  })

  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = methods

  const handleFormSubmit: SubmitHandler<ITodoFormValues> = values => {
    try {
      mutate(
        {
          name: values.name,
          description: values.description,
          status: "active",
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

  const idDisabled = status === "loading"

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        <div className="flex flex-col gap-6 px-6 py-4">
          <TodoFormFields idDisabled={idDisabled} />
        </div>
        <div className="flex items-center justify-end gap-4 px-6 py-4">
          {errors.root && (
            <p className="text-sm text-red-500">{errors.root.message}</p>
          )}
          <Button
            type="submit"
            size="md"
            isDisabled={idDisabled}
            isLoading={idDisabled}
          >
            Добавить
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
