import type { ObjectSchema } from "yup"

import { object, string } from "yup"

import type { ITodoFormValues } from "../ui"

import {
  MAX_LENGHT,
  NAME_ERROR,
  NAME_LENGHT_ERROR,
  DESCRIPTION_LENGHT_ERROR,
} from "./constants"

export const TODO_FORM_VALIDATION_SCHEME: ObjectSchema<ITodoFormValues> =
  object({
    name: string()
      .defined()
      .required(NAME_ERROR)
      .max(MAX_LENGHT, NAME_LENGHT_ERROR),
    description: string().defined().max(100, DESCRIPTION_LENGHT_ERROR),
  })
