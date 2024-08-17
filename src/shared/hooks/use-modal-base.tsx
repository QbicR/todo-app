import type { ReactElement } from "react"

import {
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react"
import { useState } from "react"

interface IModalState {
  header: string | null
  content: ReactElement | null
}

export const useModalBase = () => {
  const { isOpen, onOpen, onClose: closeModal } = useDisclosure()
  const [modalState, setModalState] = useState<IModalState>({
    header: null,
    content: null,
  })

  const openModal = ({ header, content }: IModalState) => {
    setModalState({ header, content })

    onOpen()
  }

  const modalContent = (
    <Modal
      size="3xl"
      isOpen={isOpen}
      onClose={closeModal}
      className="bg-default-300"
    >
      <ModalContent>
        <ModalHeader className="font-medium text-foreground-600">
          {modalState.header}
        </ModalHeader>
        {modalState.content}
      </ModalContent>
    </Modal>
  )

  return {
    modalContent,
    openModal,
    closeModal,
  }
}
