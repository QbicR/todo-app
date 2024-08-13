import { FC, PropsWithChildren } from "react"
import { Button as ButtonUI } from "@headlessui/react"
import { cva, VariantProps } from "class-variance-authority"

interface IProps {
  disabled?: boolean
  className?: string
}

const button = cva("button", {
  variants: {
    variant: {
      primary: [
        "bg-blue-600 hover:bg-blue-700 text-white font-medium disabled:bg-blue-600/50",
      ],
      secondary: [
        "bg-white text-black font-medium border hover:text-gray-400 disabled:bg-gray-200/50 disabled:text-gray-400/50",
      ],
    },
    size: {
      small: ["text-sm", "py-2", "px-3"],
      medium: ["text-base", "py-3", "px-4"],
    },
  },
  compoundVariants: [
    {
      class: "w-fit transition-colors disabled:cursor-not-allowed rounded",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button>,
    IProps {}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  size,
  variant,
  disabled,
  ...otherProps
}) => {
  return (
    <ButtonUI
      disabled={disabled}
      className={button({ variant, size })}
      {...otherProps}
    >
      <span>{children}</span>
    </ButtonUI>
  )
}
