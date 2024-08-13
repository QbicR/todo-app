import { AppPaths } from "@/app/providers"
import { ContentTemplate } from "@/shared/ui"
import { useNavigate } from "react-router-dom"

export const NotFoundPage = () => {
  const navigate = useNavigate()

  const click = () => {
    navigate(AppPaths.main, { replace: true })
  }

  return (
    <ContentTemplate title="Страница не найдена">
      <div className="flex flex-col gap-8">
        <h1>NotFoundPage</h1>
        <button onClick={click} className="w-fit rounded border px-4 py-2">
          На главную
        </button>
      </div>
    </ContentTemplate>
  )
}
