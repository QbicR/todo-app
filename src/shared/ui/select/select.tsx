import type { ChangeEvent, FC } from "react"

import { Field, Select as SelectUI } from "@headlessui/react"

import type { ISelectProps } from "./types"

import { selectStyles } from "./styles"

export const Select: FC<ISelectProps> = ({
  value,
  options,
  onChange,
  variant,
  size,
  disabled,
  ...otherProps
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <Field disabled={disabled}>
      <SelectUI
        name={value}
        value={value}
        onChange={onChangeHandler}
        className={selectStyles({ variant, size })}
        {...otherProps}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            className="bg-white text-black"
          >
            {option.label}
          </option>
        ))}
      </SelectUI>
    </Field>
  )
}
