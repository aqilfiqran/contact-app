import { Column, Icon, Pressable, Row, Spacer, Text } from "app/components/atoms"
import { CardContactProps } from "./CardContact.types"
import { useTheme } from "app/theme/hooks"
import { Avatar } from "app/components/molecules"
import { spacing } from "app/theme"

export function CardContact(props: CardContactProps) {
  const { colors } = useTheme()
  const { data, onPress } = props

  const fullname = `${data.firstName} ${data.lastName}`
  const initialName = `${data.firstName[0]}${data.lastName[0]}`
  const age = `${data.age} tahun`

  const isHavePhoto = data.photo !== null && data.photo !== "N/A"

  return (
    <Pressable onPress={onPress} disabled={!onPress}>
      <Column padding={{ h: spacing.large, v: spacing.small }}>
        <Row alignment="center" arrangement="between">
          <Row alignment="center" contentStyle="fillContainer">
            <Avatar source={isHavePhoto && { uri: data.photo }} text={initialName} size="medium" />
            <Spacer length={spacing.small} horizontal />
            <Column>
              <Text text={fullname} preset="Text md" />
              <Spacer length={spacing.micro} />
              <Text text={age} preset="Text xs" color={colors.palette.neutral.main} />
            </Column>
          </Row>
          <Spacer length={spacing.small} />
          <Icon
            name="chevron-right"
            size={16}
            color={colors.palette.neutral.dark}
            onPress={onPress}
          />
        </Row>
      </Column>
    </Pressable>
  )
}
