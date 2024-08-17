import type { ITodo } from "@/entities/todo"

import { useModalBase } from "@/shared/hooks"
import { IconButton, PenIcon } from "@/shared/ui"
import { memo, type FC } from "react"
import { useTranslation } from "react-i18next"

import { ChangeTodoForm } from "./change-todo-form"

interface IProps {
  todo: ITodo
}

export const ChangeTodo: FC<IProps> = memo(({ todo }) => {
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
        isDisabled={isDisabled}
        onPress={handleOpenModal}
      />
      {modalContent}
    </>
  )
})
