import type { ITodo, TTodoStatus } from "@/entities/todo"
import type { FC } from "react"

import { Checkbox } from "@nextui-org/react"

import { useChangeTodoStatus } from "../models"

interface IProps {
  todo: ITodo
}

export const ChangeTodoStatus: FC<IProps> = ({ todo }) => {
  const { mutate, status } = useChangeTodoStatus()

  const handleChangeStatus = () => {
    const status: TTodoStatus =
      todo.status === "active" ? "completed" : "active"

    mutate({ id: todo.id!, todo: { status } })
  }

  const isSelected = todo.status === "completed"
  const isDisable = status === "loading"

  return (
    <Checkbox
      isSelected={isSelected}
      onValueChange={handleChangeStatus}
      size="lg"
      color="primary"
      isDisabled={isDisable}
    />
  )
}
