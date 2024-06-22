import React,{
  Pressable,
  PressableStateCallbackType,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from "react-native"
import { Text } from "../Text"
import { ButtonProps } from "./Button.types"
import {
  $viewPresets,
  $pressedViewPresets,
  $textPresets,
  $pressedTextPresets,
  $leftAccessoryStyle,
  $rightAccessoryStyle,
  $disabledViewStyle,
  $disabledTextStyle,
  $pressedAccessoryIconPresets,
  $accessoryIconPresets,
  $sizePresets,
  $textSizePresets,
  $loadingColor,
} from "./Button.style"
import { Column, Row } from "../Container"
import { useTheme } from "app/theme/hooks/useTheme"

/**
 * A component that allows users to take actions and make choices.
 * Wraps the Text component with a Pressable component.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Button.md)
 */
export function Button(props: ButtonProps) {
  const {
    tx,
    text,
    mode = "fitContent",
    txOptions,
    preset = "filled",
    color = "primary",
    size = "medium",
    textProps,
    loading = false,
    style: $viewStyleOverride,
    pressedStyle: $pressedViewStyleOverride,
    textStyle: $textStyleOverride,
    pressedTextStyle: $pressedTextStyleOverride,
    children,
    RightAccessory,
    LeftAccessory,
    fullWidth,
    arrangement = "center",
    flex,
    readonly,
    disabled,
    ...rest
  } = props

  const theme = useTheme()

  function $viewStyle({ pressed }: PressableStateCallbackType) {
    return [
      $viewPresets(theme, color)[preset],
      $sizePresets[size],
      $viewStyleOverride,
      fullWidth && { width: "100%" },
      flex && { flex: 1 },
      pressed && [$pressedViewPresets(theme, color)[preset], $pressedViewStyleOverride],
      disabled && $disabledViewStyle(theme),
      disabled && preset === "ghost" && { backgroundColor: "transparent" },
      disabled &&
        preset === "outlined" && {
          borderColor: theme.colors.palette.neutral[200],
          backgroundColor: "transparent",
        },
    ]
  }
  function $textStyle({ pressed }: PressableStateCallbackType) {
    return [
      $textPresets(theme, color)[preset],
      $textSizePresets[size],
      $textStyleOverride,
      pressed && [$pressedTextPresets(theme, color)[preset], $pressedTextStyleOverride],
      disabled && $disabledTextStyle(theme),
    ]
  }
  function $accessoryIconStyle({ pressed }: PressableStateCallbackType) {
    return [
      $accessoryIconPresets(theme, color)[preset],
      pressed && $pressedAccessoryIconPresets(theme, color)[preset],
    ]
  }

  return (
    <Pressable
      style={$viewStyle as StyleProp<ViewStyle>}
      accessibilityRole="button"
      {...rest}
      disabled={readonly || disabled || loading}
    >
      {(state) => (
        <Row alignment="center" arrangement={arrangement}>
          {loading ? (
            <ActivityIndicator color={$loadingColor(theme, color)[preset]} />
          ) : (
            <>
              {!!LeftAccessory && (
                <LeftAccessory
                  style={$leftAccessoryStyle}
                  iconStyle={$accessoryIconStyle(state)}
                  pressableState={state}
                />
              )}

              <Column contentStyle={mode}>
                <Text
                  {...textProps}
                  tx={tx}
                  text={text}
                  txOptions={txOptions}
                  style={[$textStyle(state), textProps?.style]}
                >
                  {children}
                </Text>
              </Column>

              {!!RightAccessory && (
                <RightAccessory
                  style={$rightAccessoryStyle}
                  iconStyle={$accessoryIconStyle(state)}
                  pressableState={state}
                />
              )}
            </>
          )}
        </Row>
      )}
    </Pressable>
  )
}
