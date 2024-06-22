import React, { ComponentType } from "react"
import {
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from "react-native"
import { PaletteVariant } from "app/theme"
import { TextProps } from "../Text/Text.types"
import { ContainerArrangementType, ContainerConfigProps } from "../Container/Container.types"

export type ButtonPresets = "filled" | "outlined" | "ghost"
export type ButtonSizes = "large" | "medium" | "small" | "xsmall"
export type ButtonPropsType = ButtonProps | string

export interface ButtonAccessoryProps {
  style: StyleProp<ViewStyle>
  iconStyle: StyleProp<ImageStyle>
  pressableState: PressableStateCallbackType
}

export interface ButtonProps extends PressableProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TextProps["tx"]
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: TextProps["text"]
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: TextProps["txOptions"]
  /**
   * Modifier for Text props
   */
  textProps?: TextProps
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  /**
   * An optional style override for the "pressed" state.
   */
  pressedStyle?: StyleProp<ViewStyle>
  /**
   * An optional style override for the button text.
   */
  textStyle?: StyleProp<TextStyle>
  /**
   * An optional style override for the button text when in the "pressed" state.
   */
  pressedTextStyle?: StyleProp<TextStyle>
  /**
   * One of the different types of button presets.
   * @default "filled"
   */
  preset?: ButtonPresets
  /**
   * Use different color for each presets.
   * @default "primary"
   */
  color?: PaletteVariant
  /**
   * Button size.
   * @default "medium"
   */
  size?: ButtonSizes
  /**
   * Set button width to 100% of container.
   * @default false
   */
  fullWidth?: boolean

  flex?: boolean
  /**
   * If `true` display loading icon instead of text
   * @default false
   */
  loading?: boolean
  /**
   * An optional component to render on the right side of the text.
   * Example: `RightAccessory={(props) => <View {...props} />}`
   */
  RightAccessory?: ComponentType<ButtonAccessoryProps>
  /**
   * An optional component to render on the left side of the text.
   * Example: `LeftAccessory={(props) => <View {...props} />}`
   */
  LeftAccessory?: ComponentType<ButtonAccessoryProps>
  /**
   * Children components.
   */
  children?: React.ReactNode

  /**
   * Container arrengment type
   */
  arrangement?: ContainerArrangementType

  /**
   * If `true` button will be disabled but color will be the same
   * @default false
   * */
  readonly?: boolean

  mode?: ContainerConfigProps["contentStyle"]
}
