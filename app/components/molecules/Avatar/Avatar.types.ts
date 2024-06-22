import { ImageProps, TextProps } from "app/components/atoms"

export type AvatarSizes = "large" | "medium" | "small" | "tiny" | "xlarge"

export interface AvatarProps {
  shape?: "circle" | "square"
  source?: ImageProps["source"]
  size?: AvatarSizes
  customSize?: number
  text?: string
  color?: string
  textProps?: TextProps
  customStyle?: ImageProps["style"]
}
