import { FooterProps } from "app/components/atoms/Footer"
import { StatusBarProps } from "expo-status-bar"
import { KeyboardAvoidingViewProps, ScrollViewProps, StyleProp, ViewStyle } from "react-native"
import { Edge } from "react-native-safe-area-context"

export interface BaseScreenProps {
  /**
   * Children components.
   */
  children?: React.ReactNode
  /**
   * Style for the outer content container useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  /**
   * Style for the inner content container useful for padding & margin.
   */
  contentContainerStyle?: StyleProp<ViewStyle>
  /**
   * Override the default edges for the safe area.
   */
  safeAreaEdges?: Edge[]
  /**
   * Background color
   */
  backgroundColor?: string
  /**
   * Status bar setting. Defaults to dark.
   */
  statusBarStyle?: "light" | "dark"
  /**
   * By how much should we offset the keyboard? Defaults to 0.
   */
  keyboardOffset?: number
  /**
   * Pass any additional props directly to the StatusBar component.
   */
  StatusBarProps?: StatusBarProps

  statusBarStyleAfterScroll?: "light" | "dark"

  /**
   * Pass any additional props directly to the KeyboardAvoidingView component.
   */
  KeyboardAvoidingViewProps?: KeyboardAvoidingViewProps

  Footer?: React.ReactNode

  FooterProps?: FooterProps

  space?: number

  animate?: boolean

  Header?: React.ReactNode

  keyboardFooterOffset?: boolean

  loading?: boolean
}

export interface FixedScreenProps extends BaseScreenProps {
  preset?: "fixed"
}

export interface ScrollScreenProps extends BaseScreenProps {
  preset?: "scroll"
  /**
   * Should keyboard persist on screen tap. Defaults to handled.
   * Only applies to scroll preset.
   */
  keyboardShouldPersistTaps?: "handled" | "always" | "never"
  /**
   * Pass any additional props directly to the ScrollView component.
   */
  ScrollViewProps?: ScrollViewProps

  onTranslate?: (x: number, y: number) => void
}

export interface AutoScreenProps extends Omit<ScrollScreenProps, "preset"> {
  preset?: "auto"
  /**
   * Threshold to trigger the automatic disabling/enabling of scroll ability.
   * Defaults to `{ percent: 0.92 }`.
   */
  scrollEnabledToggleThreshold?: { percent?: number; point?: number }
}

export type ScreenProps = ScrollScreenProps | FixedScreenProps | AutoScreenProps
