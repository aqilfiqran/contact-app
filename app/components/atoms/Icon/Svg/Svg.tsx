import { createIconSetFromIcoMoon } from "@expo/vector-icons"

// create raw icon set
export const IconSvg = createIconSetFromIcoMoon(
  require("./icons.json"),
  "Icons",
  require("../../../../../assets/fonts/icons.ttf"),
)
