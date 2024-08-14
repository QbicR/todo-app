import { useModalBase } from "@/shared/hooks"
import { Button } from "@nextui-org/react"

export const AddTodo = () => {
  const { openModal, closeModal, modalContent } = useModalBase()

  const handleOpenModal = () => {
    openModal({
      header: "Добавление задачи",
      body: <p>Добавление задачи</p>,
      footer: (
        <Button color="primary" size="md" radius="sm" onClick={closeModal}>
          Добавить
        </Button>
      ),
    })
  }

  return (
    <>
      <Button color="primary" size="lg" radius="sm" onClick={handleOpenModal}>
        Добавить задачу
      </Button>
      {modalContent}
    </>
  )
}
