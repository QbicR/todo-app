import { VariantProps } from "class-variance-authority"
import { buttonStyles } from "./styles"
import { ButtonHTMLAttributes } from "react"

interface IProps {
  disabled?: boolean
}

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles>,
    IProps {}
