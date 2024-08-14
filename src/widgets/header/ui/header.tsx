import { AppPaths } from "@/app/providers"
import { Button, TodoIcon } from "@/shared/ui"
import { useNavigate } from "react-router-dom"

export const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="relative flex h-header w-full grow items-center justify-center border-b px-8 py-4">
      <div className="w-full max-w-6xl">
        <Button
          variant="light"
          color="default"
          className="w-fit px-0"
          onClick={() => navigate(AppPaths.main, { replace: true })}
          startContent={<TodoIcon className="h-8 w-8" />}
        >
          Дела
        </Button>
      </div>
    </header>
  )
}
