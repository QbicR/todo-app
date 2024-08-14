import type { VariantProps } from "class-variance-authority"
import type { ButtonHTMLAttributes } from "react"

import type { buttonStyles } from "./styles"

interface IProps {
  disabled?: boolean
}

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles>,
    IProps {}
