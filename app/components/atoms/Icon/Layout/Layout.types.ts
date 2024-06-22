import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native"
import {
  ContainerBorderColorType,
  ContainerBorderRadiusType,
  ContainerBorderWidthType,
  ContainerMarginType,
  ContainerPaddingType,
} from "../../Container"
import { ShadowSizeType } from "app/theme"

export interface IconLayoutProps {
  onPress?: TouchableOpacityProps["onPress"]
  containerStyle?: StyleProp<ViewStyle>
  children?: React.ReactNode
  padding?: ContainerPaddingType
  margin?: ContainerMarginType
  backgroundColor?: string
  borderWidth?: ContainerBorderWidthType
  borderColor?: ContainerBorderColorType
  shadow?: ShadowSizeType
  borderRadius?: ContainerBorderRadiusType
}
