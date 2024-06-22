import { ColorValue } from "react-native"
import { ImageSizeType } from "../Image"
import { IconLayoutProps } from "./Layout"
import { IconSvgProps, IconSvgType } from "./Svg"

export type IconPropsType = IconSvgProps
export type IconPropsConfigType = IconProps | IconSvgType

interface DefaultIconProps {
  size?: ImageSizeType
  color?: string | ColorValue
}

export type IconProps = IconLayoutProps & DefaultIconProps & IconPropsType

export type IconType = IconSvgType
