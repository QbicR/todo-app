import { AppPaths } from "@/app/providers"
import { ContentTemplate } from "@/shared/ui"
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
        <button onClick={click} className="w-fit rounded border px-4 py-2">
          На страницу ошибки
        </button>
      </div>
    </ContentTemplate>
  )
}
