import { Button, TextField } from "@/shared/ui"

export const FindTodo = () => {
  return (
    <form className="flex w-full gap-4" noValidate>
      <TextField placeholder="Поиск" />
      <Button type="submit">Найти</Button>
    </form>
  )
}
