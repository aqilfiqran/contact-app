import { IconPropsConfigType } from "./Icon.types"

export const createIconProps = (icon: IconPropsConfigType) => {
  if (typeof icon === "undefined") {
    return undefined
  }

  if (typeof icon === "string") {
    return { name: icon }
  }

  return icon
}
