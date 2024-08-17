import type { ButtonProps } from "@nextui-org/react"
import type { FC, ReactNode } from "react"

import { Button, Tooltip } from "@nextui-org/react"
import { twMerge } from "tailwind-merge"

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
  className,
  ...otherProps
}) => {
  const defaultStyles = "text-foreground-600 !transition-none"

  return (
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
        className={twMerge(defaultStyles, className)}
        {...otherProps}
      >
        {icon}
      </Button>
    </Tooltip>
  )
}
