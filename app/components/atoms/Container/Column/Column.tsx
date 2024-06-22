import { forwardRef } from "react"
import React, { View } from "react-native"
import Reanimated from "react-native-reanimated"
import { Edge, SafeAreaView } from "react-native-safe-area-context"
import {
  ContainerAlignmentStyle,
  ContainerArrangementStyle,
  ContainerContentStyle,
  createBorderRadiusStyle,
  createBorderWidthStyle,
  createContainerMarginStyle,
  createContainerPaddingStyle,
  createBorderColorStyle,
} from "../Container.style"
import { ContainerConfigProps, ContainerContentType } from "../Container.types"
import { shadowStyle } from "app/theme/shadow"

/**
 * Use Column to display a vertical stack Layout.
 */
export const Column = forwardRef((props: ContainerConfigProps, _ref) => {
  const {
    children,
    contentStyle = "fillContainer",
    alignment = "start",
    arrangement = "leading",
    borderRadius = 0,
    borderStyle,
    borderWidth = 0,
    borderColor,
    shadow,
    padding,
    margin,
    backgroundColor,
    width,
    height,
    minHeight,
    overflow = "visible",
    withSafeArea,
    style,
    ...rest
  } = props

  const selectedContentStyle: ContainerContentType = height ? "fixed" : contentStyle
  const ContainerPaddingStyle = createContainerPaddingStyle(padding)
  const ContainerMarginStyle = createContainerMarginStyle(margin)
  const BorderRadiusStyle = createBorderRadiusStyle(borderRadius)
  const BorderWidthStyle = createBorderWidthStyle(borderWidth)
  const BorderColorStyle = createBorderColorStyle(borderColor)
  const styles = [
    ContainerContentStyle[selectedContentStyle],
    ContainerAlignmentStyle[alignment],
    ContainerArrangementStyle[arrangement],
    shadow && shadowStyle[shadow],
    ContainerPaddingStyle?.padding,
    ContainerMarginStyle?.margin,
    BorderRadiusStyle?.borderRadius,
    BorderWidthStyle?.borderWidth,
    BorderColorStyle?.borderColor,
    {
      backgroundColor,
      width,
      height,
      minHeight,
      overflow,
      borderStyle,
    },
    style,
  ]

  if (withSafeArea) {
    const edges: Edge[] | undefined =
      withSafeArea === "topOnly" ? ["top"] : withSafeArea === "bottomOnly" ? ["bottom"] : undefined // Apply to all edges.

    return (
      <SafeAreaView style={styles} edges={edges} {...rest}>
        {children}
      </SafeAreaView>
    )
  }

  return (
    <View style={styles} {...rest}>
      {children}
    </View>
  )
})

Column.displayName = "Column"

export const ReanimatedColumn = Reanimated.createAnimatedComponent(Column)
