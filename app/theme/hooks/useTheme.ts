import { useCallback } from "react"
import { Theme, ThemeVariant } from "../theme.types"
import { useStores } from "app/models/helpers/useStores"
import { colors } from "../colors"
import { typography } from "../typography"

export function useTheme() {
  const { themeStore } = useStores()

  const setTheme = useCallback(
    (theme: ThemeVariant) => {
      themeStore.setTheme(theme)
    },
    [themeStore],
  )

  return { colors: colors[themeStore.theme], setTheme, typography } as Theme
}
