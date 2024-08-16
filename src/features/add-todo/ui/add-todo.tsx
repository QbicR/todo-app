import { useModalBase } from "@/shared/hooks"
import { Button } from "@/shared/ui"
import { useTranslation } from "react-i18next"

import { AddTodoForm } from "./add-todo-form"

export const AddTodo = () => {
  const { openModal, closeModal, modalContent } = useModalBase()
  const { t } = useTranslation()

  const handleOpenModal = () => {
    openModal({
      header: "Добавление дела",
      content: <AddTodoForm onSubmit={closeModal} />,
    })
  }

  return (
    <>
      <Button onPress={handleOpenModal}>{t("buttons.addTodo")}</Button>
      {modalContent}
    </>
  )
}
