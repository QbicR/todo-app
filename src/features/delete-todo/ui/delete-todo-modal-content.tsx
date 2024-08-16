import type { ITodo } from "@/entities/todo"
import type { FC } from "react"

import { SOMETHINK_WENT_WRONG } from "@/shared/constants"
import { Button } from "@/shared/ui"

import { useDeleteTodo } from "../models"

interface IProps {
  todo: ITodo
  closeModal: () => void
}

export const DeleteTodoModalContent: FC<IProps> = ({ todo, closeModal }) => {
  const { mutate, status } = useDeleteTodo()

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
        Вы уверены, что хотите удалить дело?
      </div>
      <div className="flex justify-between px-6 py-4">
        <Button
          type="button"
          color="default"
          variant="flat"
          size="md"
          onPress={closeModal}
          isDisabled={isDisabled}
        >
          Отменить
        </Button>
        <div className="flex items-center gap-4">
          {isError && (
            <p className="text-sm text-red-500">{SOMETHINK_WENT_WRONG}</p>
          )}
          <Button
            size="md"
            type="button"
            onPress={handleDelete}
            isDisabled={isDisabled}
            isLoading={isDisabled}
          >
            Удалить
          </Button>
        </div>
      </div>
    </>
  )
}
