import { forwardRef } from "react"
import { TouchableOpacity } from "react-native"
import { PressableProps } from "./Pressable.types"

/**
 * Use Row to display a horizontal stack Layout.
 */
export const Pressable = forwardRef((props: PressableProps, _ref) => {
  const { children, ...rest } = props

  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      {children}
    </TouchableOpacity>
  )
})
