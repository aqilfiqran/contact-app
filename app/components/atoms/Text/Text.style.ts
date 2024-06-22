import { TextStyle, StyleProp } from "react-native/types"
import { isRTL } from "app/i18n"
import { TextPresets, Weights } from "./Text.types"
import { Theme, ThemeFont } from "app/theme/theme.types"

export const $fontWeightStyles = (theme: Theme) => {
  const weights: Record<keyof ThemeFont, TextStyle["fontWeight"]> &
    Record<string, TextStyle["fontWeight"]> = {
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
  }

  return Object.entries(theme.typography.primary).reduce((acc, [weight, fontFamily]) => {
    return { ...acc, [weight]: { fontFamily, fontWeight: weights[weight] } }
  }, {}) as Record<Weights, TextStyle>
}

export const $baseStyle = (theme: Theme, weight: Weights): StyleProp<TextStyle> => [
  { color: theme.colors.text, fontWeight: "400" },
  $fontWeightStyles(theme)[weight],
]

export const $presets = (
  theme: Theme,
  weight?: Weights,
): Record<TextPresets, StyleProp<TextStyle>> => ({
  "Display 2xl": [
    $baseStyle(theme, "medium"),
    { fontSize: 36, lineHeight: 50.4, letterSpacing: -1 },
    (weight && $fontWeightStyles(theme)[weight]) || undefined,
  ],
  "Display xl": [
    $baseStyle(theme, "medium"),
    { fontSize: 32, lineHeight: 44.8, letterSpacing: -1 },
    (weight && $fontWeightStyles(theme)[weight]) || undefined,
  ],
  "Display lg": [
    $baseStyle(theme, "medium"),
    { fontSize: 24, lineHeight: 28.8 },
    (weight && $fontWeightStyles(theme)[weight]) || undefined,
  ],
  "Display md": [
    $baseStyle(theme, "medium"),
    { fontSize: 20, lineHeight: 24 },
    (weight && $fontWeightStyles(theme)[weight]) || undefined,
  ],
  "Text xl": [
    $baseStyle(theme, "medium"),
    { fontSize: 18, lineHeight: 21.6 },
    (weight && $fontWeightStyles(theme)[weight]) || undefined,
  ],
  "Text lg": [
    $baseStyle(theme, "medium"),
    { fontSize: 16, lineHeight: 19.2 },
    (weight && $fontWeightStyles(theme)[weight]) || undefined,
  ],
  "Text md": [
    $baseStyle(theme, "medium"),
    { fontSize: 14, lineHeight: 16.8 },
    (weight && $fontWeightStyles(theme)[weight]) || undefined,
  ],
  "Text sm": [
    $baseStyle(theme, "medium"),
    { fontSize: 12, lineHeight: 14.4 },
    (weight && $fontWeightStyles(theme)[weight]) || undefined,
  ],
  "Text xs": [
    $baseStyle(theme, "medium"),
    { fontSize: 10, lineHeight: 12 },
    (weight && $fontWeightStyles(theme)[weight]) || undefined,
  ],
  "Text xxs": [
    $baseStyle(theme, "medium"),
    { fontSize: 8, lineHeight: 9.6 },
    (weight && $fontWeightStyles(theme)[weight]) || undefined,
  ],
})

export const $rtlStyle: TextStyle = isRTL ? { writingDirection: "rtl" } : {}
