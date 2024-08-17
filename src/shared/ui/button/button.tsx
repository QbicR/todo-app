import type { ButtonProps } from "@nextui-org/react"
import type { FC } from "react"

import { Button as NextButton, Tooltip } from "@nextui-org/react"
import { twMerge } from "tailwind-merge"

type TProps = {
  tooltipText?: string
} & ButtonProps

export const Button: FC<TProps> = ({
  tooltipText,
  disabled,
  color = "primary",
  variant = "solid",
  size = "md",
  radius = "sm",
  children,
  className,
  ...otherProps
}) => {
  const defaultStyles = "!transition-none"

  return (
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
        className={twMerge(defaultStyles, className)}
        {...otherProps}
      >
        {children}
      </NextButton>
    </Tooltip>
  )
}
