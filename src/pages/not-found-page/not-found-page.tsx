import { AppPaths } from "@/app/providers"
import NotFoundImage from "@/shared/assets/images/not-found-image.webp"
import { Button, ContentTemplate } from "@/shared/ui"
import { Image } from "@nextui-org/react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

export const NotFoundPage = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <ContentTemplate title={t("title.notFound")}>
      <div className="flex h-fit flex-col items-center justify-start gap-8 pb-6">
        <div className="flex flex-col items-center gap-4">
          <Image
            src={NotFoundImage}
            alt="NotFoundImage"
            height={236}
            disableSkeleton={true}
            className="h-[236px]"
          />
          <h3 className="text-center">{t("text.wrongAddress")}</h3>
          <h3 className="text-center">{t("text.checkLink")}</h3>
        </div>
        <Button
          className="w-fit"
          onPress={() => navigate(AppPaths.main, { replace: true })}
        >
          {t("button.home")}
        </Button>
      </div>
    </ContentTemplate>
  )
}
