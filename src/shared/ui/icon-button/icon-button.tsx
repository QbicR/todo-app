import type { ButtonProps } from "@nextui-org/react"
import type { FC, ReactNode } from "react"

import { Button, Tooltip } from "@nextui-org/react"

type TProps = {
  icon: ReactNode
  tooltipText?: string
} & ButtonProps

export const IconButton: FC<TProps> = ({
  icon,
  tooltipText,
  disabled,
  variant = "flat",
  size = "md",
  radius = "full",
  ...otherProps
}) => (
  <Tooltip
    placement="bottom"
    content={tooltipText}
    closeDelay={100}
    delay={100}
    isDisabled={!tooltipText}
    className="bg-default-300 text-foreground-600"
  >
    <Button
      isIconOnly
      variant={variant}
      size={size}
      radius={radius}
      isDisabled={disabled}
      {...otherProps}
    >
      {icon}
    </Button>
  </Tooltip>
)
