import { Button, SearchIcon } from "@/shared/ui"
import { Input } from "@nextui-org/react"

export const FindTodo = () => {
  return (
    <form className="flex w-full gap-4" noValidate>
      <Input
        placeholder="Поиск"
        size="lg"
        radius="sm"
        classNames={{ input: ["px-12"], innerWrapper: ["flex gap-4"] }}
        startContent={<SearchIcon className="shrink-0 scale-85" />}
      />
      <Button>Найти</Button>
    </form>
  )
}
