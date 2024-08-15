import type { FC } from "react"

import { Button } from "@/shared/ui"

interface IProps {
  onSubmit: () => void
}

export const DeleteTodoModalContent: FC<IProps> = ({ onSubmit }) => {
  return (
    <>
      <div className="flex flex-col gap-6 px-6 py-4">
        Сделал дело? Гуляй смело!
      </div>
      <div className="flex justify-between px-6 py-4">
        <Button color="default" variant="flat" size="md" onClick={onSubmit}>
          Доделаю
        </Button>
        <Button size="md" onClick={onSubmit}>
          Сделал!
        </Button>
      </div>
    </>
  )
}
