import { FC, PropsWithChildren } from "react"

interface IProps {
  as?: "p" | "label" | "span"
  className?: string
}

export const Text: FC<PropsWithChildren<IProps>> = ({
  as = "p",
  className,
  children,
}) => {
  const Component = as ?? "p"

  return <Component className={className}>{children}</Component>
}
