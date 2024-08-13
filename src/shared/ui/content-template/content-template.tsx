import { FC, PropsWithChildren, useEffect } from "react"

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
    <main className="relative flex h-content w-full grow flex-col items-center px-8 py-6">
      <div className="w-full max-w-6xl">{children}</div>
    </main>
  )
}
