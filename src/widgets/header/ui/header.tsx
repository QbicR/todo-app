import { AppPaths } from "@/app/providers"
import { TodoIcon } from "@/shared/assets/icons/todo-icon"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="h-header relative flex w-full grow items-center justify-center px-8 py-4">
      <div className="w-full max-w-6xl">
        <Link
          to={AppPaths.main}
          className="flex w-fit cursor-pointer items-center gap-4"
        >
          <TodoIcon className="h-10 w-10" />
          <span className="text-3xl font-medium leading-tight">Список дел</span>
        </Link>
      </div>
    </header>
  )
}
