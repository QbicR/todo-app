import type { ITodo } from "@/entities/todo"
import type { FC } from "react"

import { useModalBase } from "@/shared/hooks"
import { DeleteIcon, IconButton } from "@/shared/ui"
import { useTranslation } from "react-i18next"

import { DeleteTodoModalContent } from "./delete-todo-modal-content"

interface IProps {
  todo: ITodo
}

export const DeleteTodo: FC<IProps> = ({ todo }) => {
  const { openModal, closeModal, modalContent } = useModalBase()
  const { t } = useTranslation()

  const handleOpenDeleteTodoModal = () => {
    openModal({
      header: t("header.modal.delete"),
      content: <DeleteTodoModalContent closeModal={closeModal} todo={todo} />,
    })
  }

  return (
    <>
      <IconButton
        icon={<DeleteIcon className="scale-85" />}
        tooltipText={t("tooltip.delete")}
        className="text-foreground-600"
        onPress={handleOpenDeleteTodoModal}
      />
      {modalContent}
    </>
  )
}
