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
  onClick,
  variant = "light",
  size = "sm",
  radius = "full",
  ...otherProps
}) => (
  <Tooltip
    placement="bottom"
    content={tooltipText}
    closeDelay={100}
    delay={100}
    isDisabled={!tooltipText}
  >
    <Button
      isIconOnly
      variant={variant}
      size={size}
      radius={radius}
      isDisabled={disabled}
      onClick={onClick}
      {...otherProps}
    >
      {icon}
    </Button>
  </Tooltip>
)
