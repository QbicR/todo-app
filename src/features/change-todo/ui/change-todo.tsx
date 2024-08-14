import type { FC } from "react"

import { useModalBase } from "@/shared/hooks"
import { IconButton, PenIcon } from "@/shared/ui"

import { ChangeTodoForm } from "./change-todo-form"

interface IProps {
  disabled: boolean
}

export const ChangeTodo: FC<IProps> = ({ disabled }) => {
  const { openModal, closeModal, modalContent } = useModalBase()

  const handleOpenModal = () => {
    openModal({
      header: "Изменение дела",
      content: <ChangeTodoForm onSubmit={closeModal} />,
    })
  }

  return (
    <>
      <IconButton
        icon={<PenIcon className="scale-85" />}
        tooltipText="Изменить"
        isDisabled={disabled}
        onClick={handleOpenModal}
      />
      {modalContent}
    </>
  )
}
