import type { FC, PropsWithChildren } from "react"
import type { LinkProps } from "react-router-dom";

import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

interface IProps extends LinkProps {
  className?: string
}

export const AppLink: FC<PropsWithChildren<IProps>> = ({
  children,
  className,
  ...otherProps
}) => (
  <Link className={twMerge(className, "keyboard-focus")} {...otherProps}>
    {children}
  </Link>
)
