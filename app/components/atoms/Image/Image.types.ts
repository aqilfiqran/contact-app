import { ImageProps as PrimitiveImageProps, ViewStyle } from "react-native"

export type ImageSizeType =
  | {
      h?: ViewStyle["height"]
      w?: ViewStyle["width"]
    }
  | number
  | string

export interface ImageProps extends PrimitiveImageProps {
  size?: ImageSizeType

  loading?: boolean
}
