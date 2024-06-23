import { FC } from "react"
import { observer } from "mobx-react-lite"
import { Button, CTextField, Column, Spacer, Text } from "app/components/atoms"
import { Screen } from "app/components/molecules"
import { spacing } from "app/theme/spacing"
import { AppNavScreen, AppScreenProps } from "app/navigators"
import { useHeader } from "app/utils/useHeader"
import { useNavigation } from "@react-navigation/native"
import { useUpdate } from "./hooks/useUpdate"
import { openLinkInBrowser } from "app/utils/openLinkInBrowser"
import { useTheme } from "app/theme/hooks"

export const ContactUpdateScreen: FC<AppScreenProps> = observer(function ContactUpdateScreen() {
  const { colors } = useTheme()
  const navigation = useNavigation<AppNavScreen>()

  useHeader({
    title: "Edit Kontak",
    leftIcon: "chevron-left",
    onLeftPress: () => navigation.goBack(),
  })

  const { control, isDirty, isLoading, isValid, handleSave, handleSubmit } = useUpdate()

  return (
    <Screen
      preset="auto"
      ScrollViewProps={{
        bounces: false,
      }}
      Footer={
        <Button
          text="Simpan"
          onPress={handleSubmit(handleSave)}
          disabled={!isDirty || !isValid}
          loading={isLoading}
        />
      }
      FooterProps={{
        padding: spacing.large,
      }}
    >
      <Column padding={{ h: spacing.large, v: spacing.medium }}>
        <CTextField
          control={control}
          name="firstName"
          label="Nama Depan"
          placeholder="Contoh: John"
          required
        />
        <Spacer length={spacing.large} />
        <CTextField
          control={control}
          name="lastName"
          label="Nama Belakang"
          placeholder="Contoh: Doe"
          required
        />

        <Spacer length={spacing.large} />

        <CTextField
          control={control}
          name="age"
          label="Umur"
          placeholder="Contoh: 25"
          keyboardType="number-pad"
          required
        />

        <Spacer length={spacing.large} />

        <CTextField
          control={control}
          name="photo"
          label="Foto"
          placeholder="Contoh: https://example.com/photo.jpg"
          required
          helper={{
            children: (
              <Text preset="Text sm" color={colors.palette.neutral.main}>
                Salin link gambar{" "}
                <Text
                  preset="Text sm"
                  color={colors.palette.primary.main}
                  text="disini"
                  onPress={() =>
                    openLinkInBrowser("https://vinicius73.github.io/gravatar-url-generator/")
                  }
                />{" "}
                atau isi dengan "N/A" jika tidak ada foto
              </Text>
            ),
          }}
        />
      </Column>
    </Screen>
  )
})
