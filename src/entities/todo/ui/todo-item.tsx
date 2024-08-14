import { useModalBase } from "@/shared/hooks"
import { DeleteIcon, PenIcon, IconButton, Button } from "@/shared/ui"
import { Checkbox } from "@nextui-org/react"
import { useState, type FC } from "react"
import { twMerge } from "tailwind-merge"

import type { ITodo } from "../types"

interface IProps {
  todo: ITodo
}

export const TodoItem: FC<IProps> = ({
  todo: { name, description, completed },
}) => {
  const [checked, setChecked] = useState<boolean>(completed)
  const { openModal, closeModal, modalContent } = useModalBase()

  const handleOpenChangeTodoModal = () => {
    openModal({
      header: "Изменение задачи",
      body: <p>Изменение задачи</p>,
      footer: (
        <Button size="md" onClick={closeModal}>
          Сохранить
        </Button>
      ),
    })
  }

  const handleOpenDeleteTodoModal = () => {
    openModal({
      header: "Удаление задачи",
      body: <p>Удаление задачи</p>,
      footer: (
        <div className="flex grow justify-between">
          <Button color="default" variant="flat" size="md" onClick={closeModal}>
            Отменить
          </Button>
          <Button size="md" onClick={closeModal}>
            Удалить
          </Button>
        </div>
      ),
    })
  }

  return (
    <>
      <div
        className={twMerge(
          "flex items-center gap-4 border-b border-gray-500 px-4 py-2 last:border-none",
          checked ? "bg-blue-100/50" : "bg-blue-100",
        )}
      >
        <Checkbox
          isSelected={checked}
          onValueChange={setChecked}
          size="lg"
          color="primary"
        />
        <div className="flex grow items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <label
              className={twMerge("leading-tight", checked && "line-through")}
            >
              {name}
            </label>
            <p className="leading-tight text-gray-500">{description}</p>
          </div>
          <div className="flex gap-4">
            <IconButton
              icon={<PenIcon className="scale-85" />}
              tooltipText="Изменить"
              isDisabled={checked}
              onClick={handleOpenChangeTodoModal}
            />
            <IconButton
              icon={<DeleteIcon className="scale-85" />}
              tooltipText="Удалить"
              onClick={handleOpenDeleteTodoModal}
            />
          </div>
        </div>
      </div>
      {modalContent}
    </>
  )
}
