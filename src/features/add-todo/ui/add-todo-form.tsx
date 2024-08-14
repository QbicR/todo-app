import type { FC } from "react"

import { TodoFormFields } from "@/entities/todo"
import { Button } from "@/shared/ui"
import { ModalBody, ModalFooter } from "@nextui-org/react"

interface IProps {
  onSubmit: () => void
}

export const AddTodoForm: FC<IProps> = ({ onSubmit }) => {
  return (
    <form>
      <ModalBody className="gap-6 py-4">
        <TodoFormFields />
      </ModalBody>
      <ModalFooter>
        <Button size="md" onClick={onSubmit}>
          Добавить
        </Button>
      </ModalFooter>
    </form>
  )
}
