import { Button, SearchIcon, TextField } from "@/shared/ui"

export const FindTodo = () => {
  return (
    <form className="flex w-full gap-4" noValidate>
      <TextField
        placeholder="Поиск"
        size="lg"
        startContent={<SearchIcon className="shrink-0 scale-85" />}
      />
      <Button>Найти</Button>
    </form>
  )
}
