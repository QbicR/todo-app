import { AppPaths } from "@/shared/config/router"
import { Button, TodoIcon, LangSwitcher, ThemeSwitcher } from "@/shared/ui"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

export const Header = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <header className="relative flex h-header w-full grow items-center justify-center bg-default-200 px-8 py-4">
      <div className="flex w-full max-w-6xl justify-between">
        <Button
          variant="light"
          color="default"
          size="lg"
          className="w-fit justify-start px-0 text-foreground-600"
          onPress={() => navigate(AppPaths.main, { replace: true })}
          startContent={<TodoIcon className="h-8 w-8" />}
        >
          {t("button.todos")}
        </Button>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
      </div>
    </header>
  )
}
