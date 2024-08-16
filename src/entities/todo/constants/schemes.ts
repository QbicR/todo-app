import type { ObjectSchema } from "yup"

import { useTranslation } from "react-i18next"
import { object, string } from "yup"

import type { ITodoFormValues } from "../ui"

export const useGetTodoFormScheme = (): ObjectSchema<ITodoFormValues> => {
  const { t } = useTranslation()

  return object({
    name: string()
      .defined()
      .required(t("field.name.requiredError"))
      .max(100, t("field.name.lengthError")),
    description: string()
      .defined()
      .max(100, t("field.description.lengthError")),
  })
}
