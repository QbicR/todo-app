import type { FC } from "react"

import { Field, Input, Label } from "@headlessui/react"
import { twMerge } from "tailwind-merge"

import type { ITextFieldProps } from "./types"

import { textFieldStyles } from "./styles"

export const TextField: FC<ITextFieldProps> = ({
  label,
  variant,
  size,
  required,
  disabled,
  ...otherProps
}) => {
  const labelSize = size === "small" ? "text-sm" : "text-base"

  return (
    <Field className="flex w-full flex-col gap-2" disabled={disabled}>
      {label && (
        <Label
          className={twMerge(
            "w-40 shrink-0 leading-tight",
            labelSize,
            required && 'after:text-red-500 after:content-["*"]',
          )}
        >
          {label}
        </Label>
      )}
      <Input
        name={label}
        className={textFieldStyles({ variant, size })}
        required={required}
        {...otherProps}
      />
    </Field>
  )
}
