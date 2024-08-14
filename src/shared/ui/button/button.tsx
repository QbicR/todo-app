import type { FC, PropsWithChildren } from "react"

import { Button as ButtonUI } from "@headlessui/react"

import type { IButtonProps } from "./types"

import { buttonStyles } from "./styles"

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
