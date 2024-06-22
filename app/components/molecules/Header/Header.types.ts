import { ReactElement } from "react"
import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native"
import { TextPropsType } from "../../atoms/Text"
import { IconPropsConfigType } from "app/components/atoms/Icon/Icon.types"
import { ExtendedEdge } from "app/utils/useSafeAreaInsetsStyle"
import { ReanimatedViewProps } from "app/components/atoms/ReanimatedView"

export interface HeaderProps {
  /**
   * An optional for height.
   */
  height?: number
  /**
   * The layout of the title relative to the action components.
   * - `center` will force the title to always be centered relative to the header. If the title or the action buttons are too long, the title will be cut off.
   * - `flex` will attempt to center the title relative to the action buttons. If the action buttons are different widths, the title will be off-center relative to the header.
   */
  titleMode?: "center" | "flex" | "left"
  /**
   * Optional outer title container style override.
   */
  titleContainerStyle?: StyleProp<ViewStyle>
  /**
   * Optional inner header wrapper style override.
   */
  style?: StyleProp<ViewStyle>
  /**
   * Optional outer header container style override.
   */
  containerStyle?: StyleProp<ViewStyle>
  /**
   * Background color
   */
  backgroundColor?: string
  /**
   * Title text to display if not using `tx` or nested components.
   */
  title?: TextPropsType
  /**
   * Icon that should appear on the title.
   */
  titleIcon?: IconPropsConfigType
  /**
   * Title action custom ReactElement if the built in action props don't suffice.
   * Overrides title, titleTx and titleText.
   */
  TitleActionComponent?: ReactElement
  /**
   * Icon that should appear on the left.
   * Can be used with `onLeftPress`.
   */
  leftIcon?: IconPropsConfigType
  /**
   * Left action text to display if not using `leftTx`.
   * Can be used with `onLeftPress`. Overrides `leftIcon`.
   */
  leftText?: TextPropsType
  /**
   * Left action custom ReactElement if the built in action props don't suffice.
   * Overrides `leftIcon`, `leftTx` and `leftText`.
   */
  LeftActionComponent?: ReactElement
  /**
   * What happens when you press the left icon or text action.
   */
  onLeftPress?: TouchableOpacityProps["onPress"]
  /**
   * Icon that should appear on the right.
   * Can be used with `onRightPress`.
   */
  rightIcon?: IconPropsConfigType
  /**
   * Right action text to display if not using `rightTx`.
   * Can be used with `onRightPress`. Overrides `rightIcon`.
   */
  rightText?: TextPropsType
  /**
   * Right action custom ReactElement if the built in action props don't suffice.
   * Overrides `rightIcon`, `rightTx` and `rightText`.
   */
  RightActionComponent?: ReactElement
  /**
   * What happens when you press the right icon or text action.
   */
  onRightPress?: TouchableOpacityProps["onPress"]
  /**
   * Override the default edges for the safe area.
   */
  safeAreaEdges?: ExtendedEdge[]

  animatedStyle?: ReanimatedViewProps["style"]
}

export interface HeaderActionProps {
  backgroundColor?: string
  icon?: IconPropsConfigType
  text?: TextPropsType
  onPress?: TouchableOpacityProps["onPress"]
  ActionComponent?: ReactElement
}
