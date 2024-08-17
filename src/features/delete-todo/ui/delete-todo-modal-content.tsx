import type { ITodo } from "@/entities/todo"
import type { FC } from "react"

import { Button } from "@/shared/ui"
import { useTranslation } from "react-i18next"

import { useDeleteTodo } from "../models"

interface IProps {
  todo: ITodo
  closeModal: () => void
}

export const DeleteTodoModalContent: FC<IProps> = ({ todo, closeModal }) => {
  const { mutate, status } = useDeleteTodo()
  const { t } = useTranslation()

  const handleDelete = () => {
    mutate(
      { id: todo.id! },
      {
        onSuccess: () => {
          closeModal()
        },
      },
    )
  }

  const isDisabled = status === "loading"
  const isError = status === "error"

  return (
    <>
      <div className="flex flex-col gap-6 px-6 py-4">
        {t("text.deleteModal")}
      </div>
      <div className="flex justify-between px-6 py-4">
        <Button
          type="button"
          color="default"
          variant="flat"
          onPress={closeModal}
          isDisabled={isDisabled}
        >
          {t("button.cancel")}
        </Button>
        <div className="flex items-center gap-4">
          {isError && (
            <p className="text-sm text-red-500">
              {t("error.somethingWentWrong")}
            </p>
          )}
          <Button
            type="button"
            onPress={handleDelete}
            isDisabled={isDisabled}
            isLoading={isDisabled}
          >
            {t("button.delete")}
          </Button>
        </div>
      </div>
    </>
  )
}
