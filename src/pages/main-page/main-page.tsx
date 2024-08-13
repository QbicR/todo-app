import { AppPaths } from "@/app/providers"
import { ContentTemplate } from "@/shared/ui"
import { Button } from "@/shared/ui/button"
import { useNavigate } from "react-router-dom"

export const MainPage = () => {
  const navigate = useNavigate()

  const click = () => {
    navigate(AppPaths.not_found)
  }

  return (
    <ContentTemplate title="Мои дела">
      <div className="flex flex-col gap-8">
        <h1>MainPage</h1>
        <Button onClick={click} variant={"primary"} size={"medium"}>
          На страницу ошибки
        </Button>
      </div>
    </ContentTemplate>
  )
}
