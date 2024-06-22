import React from "react"
import { TextPropsType } from "../Text/Text.types"
import { ContainerConfigProps } from "../Container/Container.types"

export type DividerProps = {
  type?: "horizontal" | "vertical"
  text?: TextPropsType
  color?: string
  height?: number
  borderRadius?: ContainerConfigProps["borderRadius"]
  containerProps?: ContainerConfigProps
  children?: React.ReactNode
}
