import type { ButtonProps } from "@nextui-org/react"
import type { FC } from "react"

import { Button as NextButton, Tooltip } from "@nextui-org/react"

type TProps = {
  tooltipText?: string
} & ButtonProps

export const Button: FC<TProps> = ({
  tooltipText,
  disabled,
  onClick,
  color = "primary",
  variant = "solid",
  size = "lg",
  radius = "sm",
  children,
  ...otherProps
}) => (
  <Tooltip
    placement="bottom"
    content={tooltipText}
    closeDelay={100}
    delay={100}
    isDisabled={!tooltipText}
  >
    <NextButton
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      isDisabled={disabled}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </NextButton>
  </Tooltip>
)
