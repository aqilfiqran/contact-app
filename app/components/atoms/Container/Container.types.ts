import { ShadowSizeType } from "app/theme/shadow"
import { FlexStyle, ViewProps, ViewStyle } from "react-native"

export type ContainerContentType = "fitContent" | "fillContainer" | "fixed"

export type ContainerAlignmentType = "start" | "center" | "end"

export type ContainerArrangementType = "leading" | "center" | "trailing" | "between" | "around"

export type ContainerPaddingType =
  | {
      t?: number
      r?: number
      b?: number
      l?: number
      h?: number
      v?: number
    }
  | number

export type ContainerMarginType =
  | {
      t?: number
      r?: number
      b?: number
      l?: number
      h?: number
      v?: number
    }
  | number

export type ContainerBorderRadiusType =
  | {
      tl?: number
      tr?: number
      bl?: number
      br?: number
    }
  | number

export type ContainerBorderWidthType =
  | {
      t?: number
      r?: number
      b?: number
      l?: number
    }
  | number

export type ContainerBorderColorType =
  | {
      t?: string
      r?: string
      b?: string
      l?: string
    }
  | string

export type ContainerShadowOffsetType = {
  w?: number
  h?: number
}

export interface ContainerConfigProps extends ViewProps {
  contentStyle?: ContainerContentType
  alignment?: ContainerAlignmentType
  arrangement?: ContainerArrangementType
  padding?: ContainerPaddingType
  margin?: ContainerMarginType
  borderRadius?: ContainerBorderRadiusType
  backgroundColor?: string
  borderStyle?: ViewStyle["borderStyle"]
  borderWidth?: ContainerBorderWidthType
  borderColor?: ContainerBorderColorType
  shadow?: ShadowSizeType
  width?: FlexStyle["width"]
  height?: FlexStyle["height"]
  minHeight?: FlexStyle["minHeight"]
  overflow?: FlexStyle["overflow"]
  withSafeArea?: "topOnly" | "bottomOnly" | boolean
}
