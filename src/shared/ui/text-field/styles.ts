import { cva } from "class-variance-authority"

export const textFieldStyles = cva("textField", {
  variants: {
    variant: {
      primary: ["bg-blue-100 text-black font-normal"],
    },
    size: {
      small: ["text-sm py-2 px-4"],
      medium: ["text-base py-2.5 px-6"],
    },
  },
  compoundVariants: [
    {
      class:
        "w-full transition-colors disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-gray-400 rounded keyboard-focus",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
})
