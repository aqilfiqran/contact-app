import { ErrorInfo } from "react"
import { ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { colors, spacing } from "../../theme"
import { Button, Icon, Text } from "app/components/atoms"
import { Screen } from "app/components/molecules"
import { useTheme } from "app/theme/hooks"

export interface ErrorDetailsProps {
  error: Error
  errorInfo: ErrorInfo | null
  onReset(): void
}

/**
 * Renders the error details screen.
 * @param {ErrorDetailsProps} props - The props for the `ErrorDetails` component.
 * @returns {JSX.Element} The rendered `ErrorDetails` component.
 */
export function ErrorDetails(props: ErrorDetailsProps) {
  const { colors } = useTheme()
  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["top", "bottom"]}
      contentContainerStyle={$contentContainer}
    >
      <View style={$topSection}>
        <Icon name="eject" size={64} />
        <Text preset="Display lg" text="Terjadi Kesalahan" color={colors.palette.error.main} />
        <Text text="Maaf, sepertinya ada kesalahan yang tidak terduga." />
      </View>

      <ScrollView style={$errorSection} contentContainerStyle={$errorSectionContentContainer}>
        <Text style={$errorContent} weight="bold" text={`${props.error}`.trim()} />
        <Text
          selectable
          style={$errorBacktrace}
          text={`${props.errorInfo?.componentStack ?? ""}`.trim()}
        />
      </ScrollView>

      <Button preset="filled" style={$resetButton} onPress={props.onReset} text={"Coba Lagi"} />
    </Screen>
  )
}

const $contentContainer: ViewStyle = {
  alignItems: "center",
  paddingHorizontal: spacing.large,
  paddingTop: spacing.extraLarge,
  flex: 1,
}

const $topSection: ViewStyle = {
  flex: 1,
  alignItems: "center",
}

const $errorSection: ViewStyle = {
  flex: 2,
  backgroundColor: colors.default.separator,
  marginVertical: spacing.medium,
  borderRadius: 6,
}

const $errorSectionContentContainer: ViewStyle = {
  padding: spacing.medium,
}

const $errorContent: TextStyle = {
  color: colors.default.palette.error.main,
}

const $errorBacktrace: TextStyle = {
  marginTop: spacing.medium,
  color: colors.default.textDim,
}

const $resetButton: ViewStyle = {
  backgroundColor: colors.default.error,
  paddingHorizontal: spacing.huge,
}
