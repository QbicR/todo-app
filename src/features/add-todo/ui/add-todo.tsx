import { useModalBase } from "@/shared/hooks"
import { Button } from "@/shared/ui"
import { useTranslation } from "react-i18next"

import { AddTodoForm } from "./add-todo-form"

export const AddTodo = () => {
  const { openModal, closeModal, modalContent } = useModalBase()
  const { t } = useTranslation()

  const handleOpenModal = () => {
    openModal({
      header: t("header.modal.add"),
      content: <AddTodoForm onSubmit={closeModal} />,
    })
  }

  return (
    <>
      <Button onPress={handleOpenModal} size="lg">
        {t("button.addTodo")}
      </Button>
      {modalContent}
    </>
  )
}
