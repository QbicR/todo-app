import { TextField } from "@/shared/ui"

export const TodoFormFields = () => {
  return (
    <>
      <TextField label="Наименование" placeholder="Ведите наименование" />
      <TextField label="Комментарий" placeholder="Введите комментарий" />
    </>
  )
}
