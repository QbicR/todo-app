import { Spinner } from "@nextui-org/react"
import { useTranslation } from "react-i18next"

export const OverlayLoader = () => {
  const { t } = useTranslation()

  return (
    <div className="sticky top-0 z-10 flex h-full w-full items-start justify-center bg-white/40 pt-20">
      <Spinner label={t("text.loading")} size="lg" />
    </div>
  )
}
