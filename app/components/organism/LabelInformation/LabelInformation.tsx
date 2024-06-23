import { useTheme } from "app/theme/hooks"
import { LabelInformationProps } from "./LabelInformation.types"
import { Column, Spacer, Text } from "app/components/atoms"
import { spacing } from "app/theme"

export function LabelInformation(props: LabelInformationProps) {
  const { colors } = useTheme()
  return (
    <Column>
      <Text preset="Text xs" color={colors.palette.neutral.main}>
        {props.label}
      </Text>
      <Spacer length={spacing.tiny} />
      <Text preset="Text md">{props.value}</Text>
    </Column>
  )
}
