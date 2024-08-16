import NotFoundImage from "@/shared/assets/images/not-found-image.webp"
import { Button, ContentTemplate } from "@/shared/ui"
import { Image } from "@nextui-org/react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

export const ErrorBoundaryWidget = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <ContentTemplate title="Что-то пошло не так">
      <div className="flex h-fit flex-col items-center justify-start gap-8 pb-6">
        <div className="flex flex-col items-center gap-4">
          <Image
            src={NotFoundImage}
            alt="NotFoundImage"
            height={236}
            disableSkeleton={true}
            className="h-[236px]"
          />
          <h3 className="text-center">{t("text.errorBoundary")}</h3>
        </div>
        <Button className="w-fit" onPress={() => navigate(0)}>
          {t("button.reload")}
        </Button>
      </div>
    </ContentTemplate>
  )
}
