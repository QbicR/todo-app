import type { FC } from "react"

import { TextField } from "@/shared/ui"
import { useFormContext } from "react-hook-form"
import { useTranslation } from "react-i18next"

export interface ITodoFormValues {
  name: string
  description: string
}

interface IProps {
  isDisabled: boolean
}

export const TodoFormFields: FC<IProps> = ({ isDisabled: isDisabled }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ITodoFormValues>()
  const { t } = useTranslation()

  return (
    <>
      <TextField
        label={t("field.name.label")}
        placeholder={t("field.name.placeholder")}
        errorMessage={errors.name?.message}
        {...register("name")}
        isDisabled={isDisabled}
        isRequired
      />
      <TextField
        label={t("field.description.label")}
        placeholder={t("field.description.placeholder")}
        errorMessage={errors.description?.message}
        {...register("description")}
        isDisabled={isDisabled}
      />
    </>
  )
}
