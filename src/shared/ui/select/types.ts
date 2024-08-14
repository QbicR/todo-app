import type { VariantProps } from "class-variance-authority"
import type { SelectHTMLAttributes } from "react"

import type { selectStyles } from "./styles"

export interface ISelectOption {
  value: string
  label: string
}

interface IProps {
  value: string
  options: ISelectOption[]
  onChange: (value: string) => void
  disabled?: boolean
}

export interface ISelectProps
  extends Omit<
      SelectHTMLAttributes<HTMLSelectElement>,
      "size" | "value" | "onChange"
    >,
    VariantProps<typeof selectStyles>,
    IProps {}
