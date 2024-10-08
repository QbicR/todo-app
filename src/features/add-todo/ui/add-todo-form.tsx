import type { ITodoFormValues } from "@/entities/todo"
import type { FC } from "react"
import type { SubmitHandler } from "react-hook-form"

import { useGetTodoFormScheme, TodoFormFields } from "@/entities/todo"
import { TODO_LIST_ID } from "@/shared/constants"
import { Button } from "@/shared/ui"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormProvider, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"

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
  const { t } = useTranslation()

  const methods = useForm<ITodoFormValues>({
    defaultValues: INITIAL_VALUES,
    resolver: yupResolver(useGetTodoFormScheme()),
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
    const element = document.getElementById(TODO_LIST_ID)

    try {
      mutate(
        {
          name,
          description,
          status: "active",
        },
        {
          onSuccess: () => {
            element?.scrollIntoView({ block: "start", behavior: "instant" })
            onSubmit()
          },
          onError: () => {
            setError("root", {
              message: t("error.somethingWentWrong"),
            })
          },
        },
      )
    } catch {
      setError("root", { message: t("error.somethingWentWrong") })
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
          <Button type="submit" isDisabled={isDisabled} isLoading={isDisabled}>
            {t("button.add")}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
