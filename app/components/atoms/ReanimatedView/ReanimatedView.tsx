// animated view component

import { FC } from "react"
import Reanimated from "react-native-reanimated"
import { ReanimatedViewProps } from "./ReanimatedView.types"

export const ReanimatedView: FC<ReanimatedViewProps> = (props) => {
  const { children, style } = props

  return <Reanimated.View style={style}>{children}</Reanimated.View>
}
