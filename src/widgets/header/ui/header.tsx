import { AppPaths } from "@/app/providers"
import { Button, TodoIcon, LangSwitcher } from "@/shared/ui"
import { useNavigate } from "react-router-dom"

export const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="relative flex h-header w-full grow items-center justify-center border-b px-8 py-4">
      <div className="flex w-full max-w-6xl justify-between">
        <Button
          variant="light"
          color="default"
          className="w-fit px-0"
          onPress={() => navigate(AppPaths.main, { replace: true })}
          startContent={<TodoIcon className="h-8 w-8" />}
        >
          Дела
        </Button>
        <LangSwitcher />
      </div>
    </header>
  )
}
