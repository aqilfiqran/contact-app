import { ComponentType } from "react"
import { TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from "react-native"
import {
  createBorderColorStyle,
  createBorderRadiusStyle,
  createBorderWidthStyle,
  createContainerMarginStyle,
  createContainerPaddingStyle,
} from "../../Container/Container.style"
import { $containerStyle } from "./Layout.styles"
import { IconLayoutProps } from "./Layout.types"
import { shadowStyle } from "app/theme"

/**
 * For your icon displaying needs.
 *
 * - [Documentation](https://docs.expo.dev/guides/icons/)
 * - [IcoMoon](https://icomoon.io/)
 */
export function IconLayout(props: IconLayoutProps) {
  const {
    containerStyle: $containerStyleOverride,
    onPress,
    children,
    padding,
    margin,
    borderRadius = 0,
    borderWidth = 0,
    borderColor,
    shadow,
    backgroundColor,
  } = props

  const isPressable = !!onPress

  const ContainerPaddingStyle = createContainerPaddingStyle(padding)
  const ContainerMarginStyle = createContainerMarginStyle(margin)
  const BorderRadiusStyle = createBorderRadiusStyle(borderRadius)
  const BorderWidthStyle = createBorderWidthStyle(borderWidth)
  const BorderColorStyle = createBorderColorStyle(borderColor)

  const $styles = [
    $containerStyle,
    ContainerPaddingStyle?.padding,
    ContainerMarginStyle?.margin,
    $containerStyleOverride,
    BorderRadiusStyle?.borderRadius,
    BorderWidthStyle?.borderWidth,
    BorderColorStyle?.borderColor,
    {
      backgroundColor,
    },
    shadow && shadowStyle[shadow],
  ]

  const Wrapper: ComponentType<TouchableOpacityProps> = onPress ? TouchableOpacity : View

  return (
    <Wrapper
      style={$styles as ViewStyle}
      accessibilityRole={isPressable ? "button" : undefined}
      onPress={onPress}
      activeOpacity={onPress ? 0.9 : undefined}
    >
      {children}
    </Wrapper>
  )
}
