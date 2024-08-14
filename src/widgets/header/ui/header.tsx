import { AppPaths } from "@/app/providers"
import { AppLink, TodoIcon } from "@/shared/ui"

export const Header = () => {
  return (
    <header className="relative flex h-header w-full grow items-center justify-center border-b px-8 py-4">
      <div className="w-full max-w-6xl">
        <AppLink
          to={AppPaths.main}
          className="flex w-fit cursor-pointer items-center gap-4"
        >
          <TodoIcon className="h-8 w-8" />
          <span className="text-2xl font-medium leading-tight">Список дел</span>
        </AppLink>
      </div>
    </header>
  )
}
