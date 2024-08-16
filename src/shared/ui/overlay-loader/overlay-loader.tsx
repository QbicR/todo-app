import { Spinner } from "@nextui-org/react"

export const OverlayLoader = () => {
  return (
    <div className="sticky top-0 z-10 flex h-full w-full items-start justify-center bg-white/40 pt-20">
      <Spinner label="Загрузка" size="lg" />
    </div>
  )
}
