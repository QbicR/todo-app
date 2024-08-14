import { AppPaths } from "@/app/providers"
import { ContentTemplate, NotFoundIcon } from "@/shared/ui"
import { Button } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"

export const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <ContentTemplate title="Страница не найдена">
      <div className="flex h-full flex-col items-center justify-start gap-10">
        <div className="flex flex-col items-center gap-6">
          <NotFoundIcon />
          <h3 className="text-center">
            К сожалению, вы зашли на несуществующую страницу. Возможно, вы
            перешли по старой ссылке или ввели неправильный адрес.
          </h3>
          <h3>Проверьте ссылку или вернитесь на главную страницу.</h3>
        </div>
        <Button
          color="primary"
          size="lg"
          className="w-fit"
          onClick={() => navigate(AppPaths.main, { replace: true })}
          radius="sm"
        >
          На главную
        </Button>
      </div>
    </ContentTemplate>
  )
}
