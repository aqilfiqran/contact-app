import { FC } from "react"
import { observer } from "mobx-react-lite"
import { Screen } from "app/components/molecules"
import { AppScreenProps } from "app/navigators"
import Section from "./sections"

export const ContactListScreen: FC<AppScreenProps> = observer(function ContactListScreen() {
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} ScrollViewProps={{ bounces: false }}>
      <Section.Heading />
      <Section.List />
    </Screen>
  )
})
