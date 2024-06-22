import { ContainerConfigProps } from "app/components/atoms/Container"
import { IconPropsConfigType } from "app/components/atoms/Icon"
import { TextPropsType } from "app/components/atoms/Text"
import { PaletteVariant } from "app/theme"

export type InformationBoxPresets = "filled" | "lighted"

export interface InformationBoxProps {
  text?: TextPropsType
  icon?: IconPropsConfigType
  preset?: InformationBoxPresets
  color?: PaletteVariant
  customBgColor?: string
  customColor?: string
  children?: React.ReactNode
  alertContainerProps?: ContainerConfigProps
  containerProps?: ContainerConfigProps
}
