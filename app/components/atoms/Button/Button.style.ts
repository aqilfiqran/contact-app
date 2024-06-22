import { ImageStyle, StyleProp, TextStyle, ViewStyle, ColorValue } from "react-native"
import { PaletteVariant, Theme, border, spacing } from "app/theme"
import { ButtonPresets, ButtonSizes } from "./Button.types"

const $baseViewStyle: ViewStyle = {
  minHeight: 48,
  borderRadius: border.extraSmall,
  justifyContent: "center",
  // paddingVertical: spacing.small,
  paddingHorizontal: spacing.medium,
  overflow: "hidden",
}

const $baseTextStyle = (theme: Theme): TextStyle => ({
  fontSize: 16,
  lineHeight: 20,
  fontFamily: theme.typography.primary.bold,
  textAlign: "center",
  flexShrink: 1,
  flexGrow: 0,
  zIndex: 2,
})

export const $disabledViewStyle = (theme: Theme): ViewStyle => ({
  backgroundColor: theme.colors.palette.neutral[200],
})

export const $disabledTextStyle = (theme: Theme): TextStyle => ({
  color: theme.colors.palette.neutral[300],
})

export const $rightAccessoryStyle: ViewStyle = { marginStart: spacing.extraSmall, zIndex: 1 }

export const $leftAccessoryStyle: ViewStyle = { marginEnd: spacing.extraSmall, zIndex: 1 }

const $baseAccessoryIconPresets: ImageStyle = {
  width: 24,
  height: 24,
}

export const $accessoryIconPresets = (
  theme: Theme,
  color: PaletteVariant,
): Record<ButtonPresets, StyleProp<ImageStyle>> => ({
  filled: [$baseAccessoryIconPresets, { tintColor: theme.colors.palette[color].contrastText }],
  outlined: [$baseAccessoryIconPresets, { tintColor: theme.colors.palette[color].main }],
  ghost: [$baseAccessoryIconPresets, { tintColor: theme.colors.palette[color].main }],
})

export const $pressedAccessoryIconPresets = (
  theme: Theme,
  color: PaletteVariant,
): Record<ButtonPresets, StyleProp<ImageStyle>> => ({
  filled: [$baseAccessoryIconPresets, { tintColor: theme.colors.palette[color].contrastText }],
  outlined: [$baseAccessoryIconPresets, { tintColor: theme.colors.palette[color].contrastText }],
  ghost: [$baseAccessoryIconPresets, { tintColor: theme.colors.palette[color][300] }],
})

export const $viewPresets = (
  theme: Theme,
  color: PaletteVariant,
): Record<ButtonPresets, StyleProp<ViewStyle>> => ({
  filled: [$baseViewStyle, { backgroundColor: theme.colors.palette[color].main }],

  outlined: [
    $baseViewStyle,
    {
      backgroundColor: theme.colors.transparent,
      borderWidth: 1,
      borderColor: theme.colors.palette[color].main,
    },
  ],

  ghost: [
    $baseViewStyle,
    {
      backgroundColor: theme.colors.transparent,
    },
  ],
})

export const $textPresets = (
  theme: Theme,
  color: PaletteVariant,
): Record<ButtonPresets, StyleProp<TextStyle>> => ({
  filled: [$baseTextStyle(theme), { color: theme.colors.palette[color].contrastText }],
  outlined: [$baseTextStyle(theme), { color: theme.colors.palette[color].main }],
  ghost: [$baseTextStyle(theme), { color: theme.colors.palette[color].main }],
})

export const $pressedViewPresets = (
  theme: Theme,
  color: PaletteVariant,
): Record<ButtonPresets, StyleProp<ViewStyle>> => ({
  filled: { backgroundColor: theme.colors.palette[color].dark },
  outlined: { backgroundColor: theme.colors.transparent },
  ghost: { backgroundColor: theme.colors.transparent },
})

export const $pressedTextPresets = (
  theme: Theme,
  color: PaletteVariant,
): Record<ButtonPresets, StyleProp<TextStyle>> => ({
  filled: { color: theme.colors.palette[color].contrastText },
  outlined: { color: theme.colors.palette[color].contrastText },
  ghost: { color: theme.colors.palette[color].dark },
})

export const $sizePresets: Record<ButtonSizes, ViewStyle> = {
  large: { minHeight: 48 },
  medium: { minHeight: 44 },
  small: { minHeight: 36 },
  xsmall: { minHeight: 32 },
}

export const $textSizePresets: Record<ButtonSizes, TextStyle> = {
  large: { fontSize: 16 },
  medium: { fontSize: 14 },
  small: { fontSize: 12 },
  xsmall: { fontSize: 10 },
}

export const $loadingColor = (
  theme: Theme,
  color: PaletteVariant,
): Record<ButtonPresets, ColorValue> => ({
  filled: theme.colors.palette[color].contrastText,
  outlined: theme.colors.palette[color].main,
  ghost: theme.colors.palette[color].main,
})
