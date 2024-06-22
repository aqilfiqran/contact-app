export type PaletteVariant =
  | "neutral"
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "white"

export type Palette = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  light: string
  main: string
  dark: string
  contrastText: string
}

export type ThemeVariant = "default"

export type ThemeColor = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette: Record<PaletteVariant, Palette>

  black: string
  /**
   * A helper for making something see-thru.
   */
  transparent: string
  /**
   * The default text color in many components.
   */
  text: string
  /**
   * Secondary text information.
   */
  textDim: string
  /**
   * The default color of the screen background.
   */
  background: string
  /**
   * The default border color.
   */
  border: string
  /**
   * The main tinting color.
   */
  tint: string
  /**
   * A subtle color used for lines.
   */
  separator: string
  /**
   * Error messages.
   */
  error: string
  /**
   * Error Background.
   *
   */
  errorBackground: string
}

export type ThemeFont = {
  thin: string
  light: string
  normal: string
  medium: string
  semiBold: string
  bold: string
}

export type ThemeTypography = {
  primary: ThemeFont
  secondary: ThemeFont
  code: ThemeFont
}

export type Theme = {
  colors: ThemeColor
  typography: ThemeTypography
  setTheme: (theme: ThemeVariant) => void
}
