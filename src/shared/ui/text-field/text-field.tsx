import type { InputProps } from "@nextui-org/react"

import { Input } from "@nextui-org/react"
import { forwardRef } from "react"

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      labelPlacement = "outside",
      radius = "sm",
      size = "md",
      errorMessage,
      classNames,
      ...otherProps
    },
    ref,
  ) => (
    <Input
      ref={ref}
      autoComplete="off"
      labelPlacement={labelPlacement}
      radius={radius}
      size={size}
      errorMessage={errorMessage}
      isInvalid={Boolean(errorMessage)}
      classNames={{
        ...classNames,
        errorMessage: "absolute",
        helperWrapper: "p-0",
        innerWrapper: "flex gap-4",
        inputWrapper:
          "flex gap-4 bg-default-200 group-data-[focus=true]:bg-default-200",
        input: "group-data-[has-value=true]:text-foreground-600",
        label: "group-data-[filled-within=true]:text-foreground-500",
      }}
      {...otherProps}
    />
  ),
)
