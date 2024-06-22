import { TextProps, TextPropsType } from "../Text/Text.types"

export interface LayoutFieldProps {
  /**
   * If `true` red asterisk appear next to text label.
   * @default false
   */
  required?: boolean
  /**
   * The label text to display if not using `labelTx`.
   */
  label?: TextProps["text"]
  /**
   * Label text which is looked up via i18n.
   */
  labelTx?: TextProps["tx"]
  /**
   * Optional label options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  labelTxOptions?: TextProps["txOptions"]
  /**
   * Pass any additional props directly to the label Text component.
   */
  LabelTextProps?: TextProps
  /**
   * The label text optional
   */
  labelOptional?: TextPropsType
  /**
   * LabelAccessory component to display next to the label.
   */
  LabelAccessory?: React.ReactNode
  /**
   * The helper text to display if not using `helperTx`.
   */
  helper?: TextProps["text"]
  /**
   * Helper text which is looked up via i18n.
   */
  helperTx?: TextProps["tx"]
  /**
   * Optional helper options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  helperTxOptions?: TextProps["txOptions"]
  /**
   * The error text to display if not using `errorTx`.
   */
  error?: TextProps["text"]
  /**
   * Error text which is looked up via i18n.
   */
  errorTx?: TextProps["tx"]
  /**
   * Optional helper options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  errorTxOptions?: TextProps["txOptions"]
  /**
   * Pass any additional props directly to the helper Text component.
   */
  HelperTextProps?: TextProps

  children?: React.ReactNode

  disabled?: boolean
  readonly?: boolean
}
