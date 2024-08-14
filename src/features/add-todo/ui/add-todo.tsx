import { useModalBase } from "@/shared/hooks"
import { Button } from "@/shared/ui"

export const AddTodo = () => {
  const { openModal, closeModal, modalContent } = useModalBase()

  const handleOpenModal = () => {
    openModal({
      header: "Добавление дела",
      body: <p>Добавление дела</p>,
      footer: (
        <Button size="md" onClick={closeModal}>
          Добавить
        </Button>
      ),
    })
  }

  return (
    <>
      <Button onClick={handleOpenModal}>Добавить дело</Button>
      {modalContent}
    </>
  )
}
