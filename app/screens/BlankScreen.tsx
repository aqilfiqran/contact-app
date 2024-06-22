import { FC } from "react"
import { observer } from "mobx-react-lite"
import { Column, Text } from "app/components/atoms"
import { Screen } from "app/components/molecules"
import { spacing } from "app/theme/spacing"
import { AppScreenProps } from "app/navigators"

export const BlankScreen: FC<AppScreenProps> = observer(function BlankScreen() {
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]}>
      <Column padding={{ h: spacing.large, v: spacing.medium }}>
        <Text text="tab.home" preset="Display lg" weight="bold" />
      </Column>
    </Screen>
  )
})
