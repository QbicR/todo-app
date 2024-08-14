import type { FC } from "react"

import { Button } from "@/shared/ui"
import { ModalBody, ModalFooter } from "@nextui-org/react"

interface IProps {
  onSubmit: () => void
}

export const DeleteTodoModalContent: FC<IProps> = ({ onSubmit }) => {
  return (
    <>
      <ModalBody className="gap-6 py-4">Удаление дела</ModalBody>
      <ModalFooter className="justify-between">
        <Button color="default" variant="flat" size="md" onClick={onSubmit}>
          Отменить
        </Button>
        <Button size="md" onClick={onSubmit}>
          Удалить
        </Button>
      </ModalFooter>
    </>
  )
}
