import { forwardRef, Ref, useImperativeHandle, useMemo, useRef, useState } from "react"
import {
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  StyleProp,
  ViewStyle,
} from "react-native"
import { translate } from "app/i18n"
import {
  $baseHelperStyles,
  $baseInputStyles,
  $baseInputWrapperStyles,
  $baseLabelStyles,
  $leftAccessoryStyle,
  $rightAccessoryStyle,
} from "./Textfield.style"
import { TextFieldProps } from "./Textfield.types"
import { useTheme } from "app/theme/hooks/useTheme"
import { Row } from "../Container/Row/Row"
import { Text } from "../Text/Text"
import { createTextProps } from "../Text/Text.config"
import { spacing } from "app/theme/spacing"

/**
 * A component that allows for the entering and editing of text.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-TextField.md)
 */
export const TextField = forwardRef(function TextField(
  props: TextFieldProps,
  ref: Ref<TextInput | undefined>,
) {
  const {
    disabled: inputDisabled = false,
    required = false,
    labelTx,
    label,
    labelTxOptions,
    labelOptional,
    placeholderTx,
    placeholder,
    placeholderTxOptions,
    helper,
    helperTx,
    helperTxOptions,
    error,
    errorTx,
    errorTxOptions,
    RightAccessory,
    LeftAccessory,
    HelperTextProps,
    LabelTextProps,
    LabelAccessory,
    style: $inputStyleOverride,
    containerStyle: $containerStyleOverride,
    inputWrapperStyle: $inputWrapperStyleOverride,
    readonly = false,
    ...TextInputProps
  } = props
  const theme = useTheme()
  const input = useRef<TextInput>()
  const [isFocus, setFocus] = useState(false)

  const disabled = TextInputProps.editable === false || inputDisabled === true || readonly === true
  const isError = !!(error || errorTx)

  const placeholderContent = placeholderTx
    ? translate(placeholderTx, placeholderTxOptions)
    : placeholder

  function focusInput() {
    if (disabled) {
      return
    }

    input.current?.focus()
  }

  function onFocus(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    setFocus(true)
    TextInputProps.onFocus?.(event)
  }

  function onBlur(event: NativeSyntheticEvent<TextInputFocusEventData>) {
    setFocus(false)
    TextInputProps.onBlur?.(event)
  }

  useImperativeHandle(ref, () => input.current)

  const $containerStyles = [$containerStyleOverride]

  const $labelStyles = [
    $baseLabelStyles(theme),
    disabled && !readonly && { color: theme.colors.palette.neutral[300] },
    LabelTextProps?.style,
  ]

  const $inputWrapperStyles = [
    $baseInputWrapperStyles(theme),
    TextInputProps.multiline && { minHeight: 112 },
    LeftAccessory && { paddingStart: 0 },
    RightAccessory && { paddingEnd: 0 },
    isFocus && { borderColor: theme.colors.palette.neutral.main },
    isError && { borderColor: theme.colors.palette.error.main },
    disabled && !readonly && { borderColor: theme.colors.palette.neutral[100] },
    $inputWrapperStyleOverride,
  ]

  const $inputStyles = [
    $baseInputStyles(theme),
    disabled && !readonly && { color: theme.colors.palette.neutral[300] },
    TextInputProps.multiline && { height: "auto" },
    $inputStyleOverride,
  ]

  const $helperStyles = [
    $baseHelperStyles,
    disabled && !readonly && { color: theme.colors.palette.neutral[300] },
    HelperTextProps?.style,
  ]

  const $errorHelperStyles = [$baseHelperStyles, { color: theme.colors.palette.error.main }]

  const Component = useMemo(() => {
    return TextInput
  }, [])

  const labelOptionalProps = createTextProps(labelOptional)
  const helperProps = createTextProps(helper)
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={$containerStyles}
      onPress={focusInput}
      accessibilityState={{ disabled }}
    >
      {!!(label || labelTx) && (
        <Row alignment="start">
          <Text
            preset="Text md"
            weight="medium"
            text={label}
            tx={labelTx}
            txOptions={labelTxOptions}
            {...LabelTextProps}
            style={$labelStyles}
          />
          {!!required && (
            <Text
              preset="Text md"
              text="*"
              color={theme.colors.palette.error.main}
              margin={{ l: spacing.micro }}
            />
          )}
          {!!labelOptional && (
            <Text
              preset="Text md"
              weight="normal"
              color={theme.colors.palette.neutral[400]}
              margin={{ l: spacing.micro }}
              {...labelOptionalProps}
            />
          )}
          {!!LabelAccessory && LabelAccessory}
        </Row>
      )}

      <Row alignment="start" style={$inputWrapperStyles}>
        {!!LeftAccessory && (
          <LeftAccessory
            style={$leftAccessoryStyle}
            disabled={disabled}
            error={isError}
            focused={isFocus}
            editable={!disabled}
            multiline={!!TextInputProps.multiline}
          />
        )}

        <Component
          ref={input as any}
          // for scaling font size on accessibility setting
          allowFontScaling
          maxFontSizeMultiplier={2}
          // end
          underlineColorAndroid={theme.colors.transparent}
          textAlignVertical="top"
          placeholder={placeholderContent}
          placeholderTextColor={theme.colors.palette.neutral[300]}
          {...TextInputProps}
          onFocus={onFocus}
          onBlur={onBlur}
          editable={!disabled}
          style={$inputStyles as StyleProp<ViewStyle>}
        />

        {!!RightAccessory && (
          <RightAccessory
            style={$rightAccessoryStyle}
            disabled={disabled}
            error={isError}
            focused={isFocus}
            editable={!disabled}
            multiline={!!TextInputProps.multiline}
          />
        )}
      </Row>

      {!!(error || errorTx) && (
        <Text
          preset="Text sm"
          weight="normal"
          text={error}
          tx={errorTx}
          txOptions={errorTxOptions}
          style={$errorHelperStyles}
        />
      )}

      {!!(helper || helperTx) && (
        <Text
          preset="Text sm"
          weight="normal"
          color={theme.colors.palette.neutral.main}
          {...helperProps}
          tx={helperTx}
          txOptions={helperTxOptions}
          {...HelperTextProps}
          style={$helperStyles}
        />
      )}
    </TouchableOpacity>
  )
})
