import { memo, useMemo } from "react"
import { DividerProps } from "./Divider.types"
import { Horizontal, Vertical } from "./types"

/**
 * FIXME: if you want to customize borderStyle, you can do it here:
 * https://dev.to/franciscomendes10866/how-to-create-a-dashed-line-using-react-native-svg-3lip
 * */

export function Divider(props: DividerProps) {
  const { type = "horizontal" } = props

  const Component = useMemo(() => Types[type], [type])

  return <Component {...props} />
}

const Types = {
  horizontal: Horizontal,
  vertical: Vertical,
}

export const MemoizedDivider = memo(Divider, () => true)

MemoizedDivider.displayName = "Divider"
