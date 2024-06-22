import { Dimensions, StatusBar } from "react-native"

const screenHeight = Dimensions.get("screen").height
const windowHeight = Dimensions.get("window").height
const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight

/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
export const size = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
  navbarHeight,
} as const

export type Size = keyof typeof size
