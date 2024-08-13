import { TodoIcon } from "@/shared/assets/icons/todo-icon"

export const Header = () => {
  return (
    <header className="h-header relative flex w-full grow items-center justify-center px-8 py-4">
      <div className="flex w-full max-w-6xl items-center gap-4">
        <TodoIcon className="h-10 w-10" />
        <label className="text-3xl font-medium leading-tight">Список дел</label>
      </div>
    </header>
  )
}
