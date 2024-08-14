import type { InputProps } from "@nextui-org/react"
import type { FC } from "react"

import { Input } from "@nextui-org/react"

export const TextField: FC<InputProps> = ({
  labelPlacement = "outside",
  radius = "sm",
  size = "md",
  errorMessage,
  classNames,
  ...otherProps
}) => (
  <Input
    labelPlacement={labelPlacement}
    radius={radius}
    size={size}
    errorMessage={errorMessage}
    isInvalid={Boolean(errorMessage)}
    classNames={{
      ...classNames,
      errorMessage: ["absolute"],
      helperWrapper: ["p-0"],
      innerWrapper: ["flex gap-4"],
    }}
    {...otherProps}
  />
)
