import { Ref, forwardRef, memo } from "react"
import Reanimated from "react-native-reanimated"
import { Text as RNText } from "react-native"
import { translate } from "app/i18n"
import { TextProps } from "./Text.types"
import { $presets, $rtlStyle } from "./Text.style"
import {
  createContainerMarginStyle,
  createContainerPaddingStyle,
} from "../Container/Container.style"
import { useTheme } from "app/theme/hooks/useTheme"

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Text.md)
 */
export const Text = forwardRef((props: TextProps, _ref: Ref<Text>) => {
  const theme = useTheme()

  const {
    tx,
    txOptions,
    text,
    lineHeight,
    weight,
    align,
    color = theme.colors.palette.neutral[900],
    children,
    style: $styleOverride,
    padding,
    margin,
    preset = "Text md",
    ...rest
  } = props

  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children

  const containerPaddingStyle = createContainerPaddingStyle(padding)
  const containerMarginStyle = createContainerMarginStyle(margin)

  const $styles = [
    $rtlStyle,
    $presets(theme, weight)[preset],
    { lineHeight, color },
    align && { textAlign: align },
    containerPaddingStyle?.padding,
    containerMarginStyle?.margin,
    $styleOverride,
  ]

  return (
    <RNText
      {...rest}
      // for scaling font size on accessibility setting
      allowFontScaling
      maxFontSizeMultiplier={2}
      minimumFontScale={0.8}
      // end
      style={$styles}
    >
      {content}
    </RNText>
  )
})

Text.displayName = "Text"

export const ReanimatedText = Reanimated.createAnimatedComponent(Text)
export const MemoizedText = memo(Text)
