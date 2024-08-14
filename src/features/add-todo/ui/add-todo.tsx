import { useModalBase } from "@/shared/hooks"
import { Button } from "@/shared/ui"

export const AddTodo = () => {
  const { openModal, closeModal, modalContent } = useModalBase()

  const handleOpenModal = () => {
    openModal({
      header: "Добавление задачи",
      body: <p>Добавление задачи</p>,
      footer: (
        <Button size="md" onClick={closeModal}>
          Добавить
        </Button>
      ),
    })
  }

  return (
    <>
      <Button onClick={handleOpenModal}>Добавить задачу</Button>
      {modalContent}
    </>
  )
}
