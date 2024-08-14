import { useModalBase } from "@/shared/hooks"
import { DeleteIcon, IconButton } from "@/shared/ui"

import { DeleteTodoModalContent } from "./delete-todo-modal-content"

export const DeleteTodo = () => {
  const { openModal, closeModal, modalContent } = useModalBase()

  const handleOpenDeleteTodoModal = () => {
    openModal({
      header: "Удаление дела",
      content: <DeleteTodoModalContent onSubmit={closeModal} />,
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
