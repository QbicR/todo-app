import type { FC } from "react"

import { twMerge } from "tailwind-merge"

interface IProps {
  className?: string
}

export const RuIcon: FC<IProps> = ({ className }) => {
  const styles = twMerge("h-6 w-6", className)

  return (
    <svg viewBox="0 0 640 480" className={styles}>
      <path fill="#fff" d="M0 0h640v160H0z" />
      <path fill="#0039a6" d="M0 160h640v160H0z" />
      <path fill="#d52b1e" d="M0 320h640v160H0z" />
    </svg>
  )
}
