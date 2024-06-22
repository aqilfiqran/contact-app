import { ButtonPropsType } from "./Button.types"

export const createButtonProps = (button?: ButtonPropsType) => {
  if (typeof button === "undefined") {
    return undefined
  }

  if (typeof button === "string") {
    return { text: button }
  }

  return button
}
