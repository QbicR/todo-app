import type { FC, PropsWithChildren } from "react"

import { useEffect } from "react"
import { useTranslation } from "react-i18next"

interface IProps {
  title?: string
}

export const ContentTemplate: FC<PropsWithChildren<IProps>> = ({
  children,
  title,
}) => {
  const { t } = useTranslation()

  useEffect(() => {
    window.document.title = title || t("title.default")
  }, [title, t])

  return (
    <main className="relative flex h-main w-full grow flex-col items-center bg-default-300 px-8 py-6">
      <div className="h-full w-full max-w-6xl">{children}</div>
    </main>
  )
}
