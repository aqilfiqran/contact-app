import { FC } from "react"
import { observer } from "mobx-react-lite"
import { Button, Column, Spacer } from "app/components/atoms"
import { Screen } from "app/components/molecules"
import { spacing } from "app/theme/spacing"
import { AppNavScreen, AppRouteProp, AppScreenProps } from "app/navigators"
import { useNavigation, useRoute } from "@react-navigation/native"
import { useHeader } from "app/utils/useHeader"
import { useContactDelete } from "app/services/api/contact/useContactDelete"
import Section from "./sections"

export const ContactDetailScreen: FC<AppScreenProps> = observer(function ContactDetailScreen() {
  const navigation = useNavigation<AppNavScreen>()
  const route = useRoute<AppRouteProp<"ContactDetail">>()
  const { id } = route.params

  useHeader({
    title: "Detail Kontak",
    leftIcon: "chevron-left",
    onLeftPress: () => navigation.goBack(),
  })

  const { mutate, isLoading } = useContactDelete()

  return (
    <Screen
      preset="auto"
      ScrollViewProps={{
        bounces: false,
      }}
      FooterProps={{
        padding: spacing.large,
      }}
      Footer={
        <Column>
          <Button
            flex
            text="Edit"
            disabled={isLoading}
            onPress={() =>
              navigation.navigate("ContactUpdate", {
                id,
              })
            }
          />
          <Spacer length={spacing.small} />
          <Button
            flex
            text="Hapus"
            preset="outlined"
            color="error"
            loading={isLoading}
            onPress={() => {
              mutate(
                {
                  params: {
                    id,
                  },
                },
                {
                  onSuccess: () => {
                    navigation.goBack()
                  },
                },
              )
            }}
          />
        </Column>
      }
    >
      <Section.Information />
    </Screen>
  )
})
