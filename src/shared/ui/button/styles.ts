import { cva } from "class-variance-authority"

export const buttonStyles = cva("button", {
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
      small: ["text-sm py-2 px-4"],
      medium: ["text-base py-2.5 px-6"],
    },
  },
  compoundVariants: [
    {
      class:
        "w-fit transition-colors disabled:cursor-not-allowed rounded keyboard-focus",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
})
