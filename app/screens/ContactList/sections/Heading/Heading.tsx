import { useNavigation } from "@react-navigation/native"
import { Button, Column, Row, Spacer, Text } from "app/components/atoms"
import { AppNavScreen } from "app/navigators"
import { spacing } from "app/theme"
import { memo } from "react"

export const Heading = memo(() => {
  const navigation = useNavigation<AppNavScreen>()

  return (
    <Column padding={{ h: spacing.large, v: spacing.medium }}>
      <Row alignment="center" arrangement="between" contentStyle="fillContainer">
        <Text text="List Kontak" preset="Display lg" weight="bold" />

        <Spacer length={spacing.small} />

        <Button
          preset="outlined"
          size="xsmall"
          text="Tambah"
          onPress={() => {
            navigation.navigate("ContactCreate")
          }}
        />
      </Row>
    </Column>
  )
})
