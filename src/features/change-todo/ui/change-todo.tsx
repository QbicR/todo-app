import type { ITodo } from "@/entities/todo"
import type { FC } from "react"

import { useModalBase } from "@/shared/hooks"
import { IconButton, PenIcon } from "@/shared/ui"
import { useTranslation } from "react-i18next"

import { ChangeTodoForm } from "./change-todo-form"

interface IProps {
  todo: ITodo
}

export const ChangeTodo: FC<IProps> = ({ todo }) => {
  const { openModal, closeModal, modalContent } = useModalBase()
  const { t } = useTranslation()

  const handleOpenModal = () => {
    openModal({
      header: t("header.modal.change"),
      content: <ChangeTodoForm todo={todo} onSubmit={closeModal} />,
    })
  }

  const isDisabled = todo.status === "completed"

  return (
    <>
      <IconButton
        icon={<PenIcon className="scale-85" />}
        tooltipText={t("tooltip.change")}
        className="text-foreground-600"
        isDisabled={isDisabled}
        onPress={handleOpenModal}
      />
      {modalContent}
    </>
  )
}
