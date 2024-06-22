import { StyleProp, TextProps as RNTextProps, TextStyle } from "react-native"
import i18n from "i18n-js"
import { TxKeyPath } from "app/i18n"
import { ContainerConfigProps } from "../Container/Container.types"
import { ThemeFont } from "app/theme/theme.types"

export type TextPresets =
  | "Display 2xl"
  | "Display xl"
  | "Display lg"
  | "Display md"
  | "Text xl"
  | "Text lg"
  | "Text md"
  | "Text sm"
  | "Text xs"
  | "Text xxs"

export type TextPropsType = TextProps | string

export type Weights = keyof ThemeFont

type TextMarginPadding = Pick<ContainerConfigProps, "padding" | "margin">

export interface TextProps extends RNTextProps, TextMarginPadding {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: i18n.TranslateOptions
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>
  /**
   * One of the different types of text presets.
   */
  preset?: TextPresets
  /**
   * Text weight modifier.
   */
  weight?: Weights
  /**
   * Line heigh modifier.
   */
  lineHeight?: number
  /**
   * Children components.
   */
  children?: React.ReactNode
  /**
   * Color modifier.
   */
  color?: string

  align?: "left" | "center" | "right"
}
