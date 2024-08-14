import type { ReactElement } from "react"

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react"
import { useState } from "react"

interface IModalState {
  header: string | null
  body: ReactElement | null
  footer: ReactElement | null
}

export const useModalBase = () => {
  const { isOpen, onOpen, onClose: closeModal } = useDisclosure()
  const [modalState, setModalState] = useState<IModalState>({
    header: null,
    body: null,
    footer: null,
  })

  const openModal = ({ header, body, footer }: IModalState) => {
    setModalState({ header, body, footer })

    onOpen()
  }

  const modalContent = (
    <Modal size="3xl" isOpen={isOpen} onClose={closeModal} disableAnimation>
      <ModalContent>
        <ModalHeader className="font-medium">{modalState.header}</ModalHeader>
        <ModalBody>{modalState.body}</ModalBody>
        <ModalFooter>{modalState.footer}</ModalFooter>
      </ModalContent>
    </Modal>
  )

  return {
    modalContent,
    openModal,
    closeModal,
  }
}
