import { cva } from "class-variance-authority"

export const selectStyles = cva("select", {
  variants: {
    variant: {
      primary: ["bg-blue-600 text-white font-medium"],
    },
    size: {
      small: ["text-sm py-2 px-4 h-9"],
      medium: ["text-base py-2.5 px-6 h-11"],
    },
  },
  compoundVariants: [
    {
      class:
        "w-50 transition-colors disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-gray-400 rounded keyboard-focus",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
})
