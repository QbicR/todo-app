import type { FC, PropsWithChildren} from "react";

import { useEffect } from "react"

interface IProps {
  title?: string
}

export const ContentTemplate: FC<PropsWithChildren<IProps>> = ({
  children,
  title = "Список дел",
}) => {
  useEffect(() => {
    window.document.title = title
  }, [title])

  return (
    <main className="h-main relative flex w-full grow flex-col items-center px-8 py-6">
      <div className="w-full max-w-6xl">{children}</div>
    </main>
  )
}
