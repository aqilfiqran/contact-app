import { Theme, spacing } from "app/theme"
import { TextStyle, ViewStyle } from "react-native/types"

export const $container: ViewStyle = {
  width: "100%",
}

export const $title: TextStyle = {
  textAlign: "center",
}

export const $actionTextContainer: ViewStyle = {
  flexGrow: 0,
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  paddingHorizontal: spacing.large,
  zIndex: 2,
}

export const $actionText = (theme: Theme): TextStyle => ({
  color: theme.colors.tint,
})

export const $actionIconContainer: ViewStyle = {
  flexGrow: 0,
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  paddingHorizontal: spacing.large,
  zIndex: 2,
}

export const $actionFillerContainer: ViewStyle = {
  width: 16,
}

export const $titleWrapperCenter: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  position: "absolute",
  paddingHorizontal: spacing.huge,
  zIndex: 1,
}

export const $titleWrapperFlex: ViewStyle = {
  justifyContent: "center",
  flexGrow: 1,
}

export const $titleWrapperLeft: ViewStyle = {
  alignItems: "flex-start",
  justifyContent: "center",
  height: "100%",

  flex: 1,
}
