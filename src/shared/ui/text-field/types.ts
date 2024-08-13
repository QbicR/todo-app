import { InputHTMLAttributes } from "react"
import { textFieldStyles } from "./styles"
import { VariantProps } from "class-variance-authority"

interface IProps {
  label?: string
  required?: boolean
}

export interface ITextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof textFieldStyles>,
    IProps {}
