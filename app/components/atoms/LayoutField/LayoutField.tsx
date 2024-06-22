import { forwardRef } from "react"
import { LayoutFieldProps } from "./LayoutField.types"
import { useTheme } from "app/theme/hooks/useTheme"
import { $baseHelperStyles, $baseLabelStyles } from "../TextField/Textfield.style"
import { createTextProps } from "../Text/Text.config"
import { Column } from "../Container/Column"
import { Row } from "../Container/Row"
import { Text } from "../Text/Text"
import { spacing } from "app/theme/spacing"
/**
 * Use LayoutField to .
 */
export const LayoutField = forwardRef((props: LayoutFieldProps, _) => {
  const theme = useTheme()
  const {
    required = false,
    labelTx,
    label,
    labelTxOptions,
    LabelTextProps,
    LabelAccessory,
    helper,
    helperTx,
    helperTxOptions,
    error,
    errorTx,
    errorTxOptions,
    HelperTextProps,
    labelOptional,
    disabled = false,
    readonly = false,
    children,
  } = props

  const $labelStyles = [
    $baseLabelStyles(theme),
    disabled && !readonly && { color: theme.colors.palette.neutral[300] },
    LabelTextProps?.style,
  ]

  const $helperStyles = [
    $baseHelperStyles,
    disabled && !readonly && { color: theme.colors.palette.neutral[300] },
    HelperTextProps?.style,
  ]

  const $errorHelperStyles = [$baseHelperStyles, { color: theme.colors.palette.error.main }]

  const labelOptionalProps = createTextProps(labelOptional)

  return (
    <Column>
      {!!(label || labelTx) && (
        <Row alignment="start">
          <Text
            preset="Text md"
            weight="normal"
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

      {children}

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
          text={helper}
          tx={helperTx}
          txOptions={helperTxOptions}
          {...HelperTextProps}
          style={$helperStyles}
        />
      )}
    </Column>
  )
})

LayoutField.displayName = "LayoutField"
