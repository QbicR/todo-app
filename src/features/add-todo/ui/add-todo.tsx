import { useModalBase } from "@/shared/hooks"
import { Button } from "@/shared/ui"

import { AddTodoForm } from "./add-todo-form"

export const AddTodo = () => {
  const { openModal, closeModal, modalContent } = useModalBase()

  const handleOpenModal = () => {
    openModal({
      header: "Добавление дела",
      content: <AddTodoForm onSubmit={closeModal} />,
    })
  }

  return (
    <>
      <Button onPress={handleOpenModal}>Добавить дело</Button>
      {modalContent}
    </>
  )
}
