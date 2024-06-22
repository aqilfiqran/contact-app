import {
  Inter_300Light as interLight,
  Inter_400Regular as interRegular,
  Inter_500Medium as interMedium,
  Inter_600SemiBold as interSemiBold,
  Inter_700Bold as interBold,
} from "@expo-google-fonts/inter"
import { ThemeTypography } from "./theme.types"
import { normalizeFont } from "app/utils/normalizeFont"

const Icons = require("assets/fonts/icons.ttf")

export const customFontsToLoad = {
  interLight,
  interRegular,
  interMedium,
  interSemiBold,
  interBold,
}

/**
 * Normalize each font
 */
const fonts = {
  inter: normalizeFont({
    // Cross-platform Google font.
    light: "interLight",
    normal: "interRegular",
    medium: "interMedium",
    semiBold: "interSemiBold",
    bold: "interBold",
  }),

  Icons,
}

export const typography: ThemeTypography = {
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.inter,

  secondary: fonts.inter,

  code: fonts.inter,
}
