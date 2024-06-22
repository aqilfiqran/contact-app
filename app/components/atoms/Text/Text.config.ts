import { TextPropsType } from "./Text.types"

export const createTextProps = (text?: TextPropsType) => {
  if (typeof text === "undefined") {
    return undefined
  }

  if (typeof text === "string") {
    return { text }
  }

  return text
}
