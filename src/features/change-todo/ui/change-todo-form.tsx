import type { FC } from "react"

import { TodoFormFields } from "@/entities/todo"
import { Button } from "@/shared/ui"

interface IProps {
  onSubmit: () => void
}

export const ChangeTodoForm: FC<IProps> = ({ onSubmit }) => {
  return (
    <form>
      <div className="flex flex-col gap-6 px-6 py-4">
        <TodoFormFields />
      </div>
      <div className="flex justify-end px-6 py-4">
        <Button size="md" onClick={onSubmit}>
          Сохранить
        </Button>
      </div>
    </form>
  )
}
