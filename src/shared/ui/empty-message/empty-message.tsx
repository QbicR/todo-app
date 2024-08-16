import NotFoundImage from "@/shared/assets/images/not-found-image.webp"
import { Image } from "@nextui-org/react"
import { useTranslation } from "react-i18next"

export const EmptyMessage = () => {
  const { t } = useTranslation()

  return (
    <div className="flex h-full flex-col items-center justify-start gap-6">
      <Image
        src={NotFoundImage}
        alt="NotFoundImage"
        height={236}
        disableSkeleton={true}
        className="h-[236px]"
      />
      <span className="text-3xl font-medium uppercase text-[#d3d1ff]">
        {t("error.empty")}
      </span>
    </div>
  )
}
