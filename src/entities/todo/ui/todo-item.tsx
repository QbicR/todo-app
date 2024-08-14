import { Button } from "@/shared/ui"

export const TodoItem = () => {
  return (
    <div className="flex items-start gap-4 border-b border-gray-500 px-4 py-2 last:border-none">
      <input type="checkbox" />
      <div className="flex grow items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <label className="leading-tight">flex flex-col gap-2</label>
          <p className="leading-tight text-gray-500">
            flex gap-4 border-b border-gray-500 py-2 last:border-noneflex gap-4
            border-b border-gray-500 py-2 last:border-noneflex gap-4 border-b
            border-gray-500 py-2 last:border-noneflex gap-4 border-b
            border-gray-500 py-2 last:border-none
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant={"secondary"}>Изменить</Button>
          <Button variant={"secondary"}>Удалить</Button>
        </div>
      </div>
    </div>
  )
}
