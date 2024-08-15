import type { ITodo } from "@/entities/todo"
import type { FC } from "react"

import { useModalBase } from "@/shared/hooks"
import { DeleteIcon, IconButton } from "@/shared/ui"

import { DeleteTodoModalContent } from "./delete-todo-modal-content"

interface IProps {
  todo: ITodo
}

export const DeleteTodo: FC<IProps> = ({ todo }) => {
  const { openModal, closeModal, modalContent } = useModalBase()

  const handleOpenDeleteTodoModal = () => {
    openModal({
      header: "Удаление дела",
      content: <DeleteTodoModalContent closeModal={closeModal} todo={todo} />,
    })
  }

  return (
    <>
      <IconButton
        icon={<DeleteIcon className="scale-85" />}
        tooltipText="Удалить"
        onClick={handleOpenDeleteTodoModal}
      />
      {modalContent}
    </>
  )
}
