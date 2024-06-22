import React, { forwardRef } from "react"
import Reanimated from "react-native-reanimated"
import { Column } from "../Column"
import { ContainerConfigProps } from "../Container.types"
import RowStyle from "./Row.style"

/**
 * Use Row to display a horizontal stack Layout.
 */
export const Row = forwardRef((props: ContainerConfigProps, _ref) => {
  const { children, style, ...rest } = props

  return (
    <Column
      contentStyle="fitContent"
      alignment="center"
      style={[RowStyle.defaultStyle, style]}
      {...rest}
    >
      {children}
    </Column>
  )
})

Row.displayName = "Row"

export const ReanimatedRow = Reanimated.createAnimatedComponent(Row)
