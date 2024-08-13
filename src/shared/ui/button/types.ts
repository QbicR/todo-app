import { VariantProps } from "class-variance-authority"
import { buttonStyles } from "./styles"

interface IProps {
  disabled?: boolean
}

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles>,
    IProps {}
