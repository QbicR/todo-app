import type { ITodo } from "@/entities/todo"
import type { FC } from "react"

import { useModalBase } from "@/shared/hooks"
import { IconButton, PenIcon } from "@/shared/ui"

import { ChangeTodoForm } from "./change-todo-form"

interface IProps {
  todo: ITodo
  disabled: boolean
}

export const ChangeTodo: FC<IProps> = ({ todo, disabled }) => {
  const { openModal, closeModal, modalContent } = useModalBase()

  const handleOpenModal = () => {
    openModal({
      header: "Изменение дела",
      content: <ChangeTodoForm todo={todo} onSubmit={closeModal} />,
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
