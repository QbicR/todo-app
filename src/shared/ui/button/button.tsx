import { FC, PropsWithChildren } from "react"
import { Button as ButtonUI } from "@headlessui/react"
import { buttonStyles } from "./styles"
import { IButtonProps } from "./types"

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  children,
  size,
  variant,
  disabled,
  ...otherProps
}) => (
  <ButtonUI
    className={buttonStyles({ variant, size })}
    disabled={disabled}
    {...otherProps}
  >
    <span>{children}</span>
  </ButtonUI>
)
