import { useTheme } from "app/theme/hooks/useTheme"
import { DividerProps } from "../Divider.types"
import { spacing } from "app/theme/spacing"
import { createTextProps } from "../../Text/Text.config"
import { Column } from "../../Container/Column/Column"
import { Text } from "../../Text/Text"

/**
 * FIXME: if you want to customize borderStyle, you can do it here:
 * https://dev.to/franciscomendes10866/how-to-create-a-dashed-line-using-react-native-svg-3lip
 * */

export function Vertical(props: DividerProps) {
  const { colors } = useTheme()
  const defaultColor = colors.palette.neutral[500]

  const { height = 0.5, color = defaultColor, text, borderRadius, containerProps } = props

  const textProps = createTextProps(text)

  return (
    <Column alignment="center" height="100%" {...containerProps}>
      <Column borderWidth={{ l: height }} borderColor={color} borderRadius={borderRadius} />
      {!!textProps && (
        <Text preset="Text sm" weight="normal" padding={{ v: spacing.tiny }} {...textProps} />
      )}
      {!!textProps && (
        <Column borderWidth={{ l: height }} borderColor={color} borderRadius={borderRadius} />
      )}
    </Column>
  )
}
