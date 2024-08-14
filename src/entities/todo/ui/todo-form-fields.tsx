import { Input } from "@nextui-org/react"

export const TodoFormFields = () => {
  return (
    <>
      <Input
        label="Наименование"
        placeholder="Ведите наименование"
        labelPlacement="outside"
        radius="sm"
        size="md"
        classNames={{
          errorMessage: ["absolute"],
          helperWrapper: ["p-0"],
        }}
      />
      <Input
        label="Комментарий"
        placeholder="Введите комментарий"
        labelPlacement="outside"
        radius="sm"
        size="md"
        classNames={{
          errorMessage: ["absolute"],
          helperWrapper: ["p-0"],
        }}
      />
    </>
  )
}
