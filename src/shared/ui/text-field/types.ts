import type { VariantProps } from "class-variance-authority"
import type { InputHTMLAttributes } from "react"

import type { textFieldStyles } from "./styles"

interface IProps {
  label?: string
  required?: boolean
}

export interface ITextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof textFieldStyles>,
    IProps {}
