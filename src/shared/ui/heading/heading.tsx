import type { FC, PropsWithChildren } from "react"

interface IProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  className?: string
}

export const Heading: FC<PropsWithChildren<IProps>> = ({
  as = "h1",
  className,
  children,
}) => {
  const Component = as ?? "h1"

  return <Component className={className}>{children}</Component>
}
