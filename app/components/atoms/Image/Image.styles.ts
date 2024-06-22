import { ImageSizeType } from "./Image.types"
import { DimensionValue, StyleSheet } from "react-native"

export const createImageSizeStyle = (size?: ImageSizeType) => {
  if (typeof size === "undefined") {
    return undefined
  }

  if (typeof size === "string" || typeof size === "number") {
    return StyleSheet.create({
      size: { height: size as DimensionValue, width: size as DimensionValue },
    })
  }

  const height = size.h ?? "100%"
  const width = size.w ?? "100%"

  return StyleSheet.create({
    size: {
      height,
      width,
    },
  })
}
