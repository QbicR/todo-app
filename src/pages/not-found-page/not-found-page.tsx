import { AppPaths } from "@/app/providers"
import AvatarImg from "@/shared/assets/images/not-found-image.webp"
import { Button, ContentTemplate } from "@/shared/ui"
import { Image } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"

export const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <ContentTemplate title="Страница не найдена">
      <div className="flex h-fit flex-col items-center justify-start gap-8 pb-6">
        <div className="flex flex-col items-center gap-4">
          <Image src={AvatarImg} width={300} />
          <h3 className="text-center">
            К сожалению, вы зашли на несуществующую страницу. Возможно, вы
            перешли по старой ссылке или ввели неправильный адрес.
          </h3>
          <h3 className="text-center">
            Проверьте ссылку или вернитесь на главную страницу.
          </h3>
        </div>
        <Button
          className="w-fit"
          onPress={() => navigate(AppPaths.main, { replace: true })}
        >
          На главную
        </Button>
      </div>
    </ContentTemplate>
  )
}
