import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "../helpers/withSetPropAction"
import { ThemeVariant, colors } from "app/theme"

export const ThemeStoreModel = types
  .model("ThemeStore")
  .props({
    lang: types.maybe(types.enumeration(["id"])),
    theme: types.enumeration(Object.keys(colors) as ThemeVariant[]),
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    setTheme(theme: keyof typeof colors) {
      store.setProp("theme", theme)
    },
    setLang(key: LanguageCodeType) {
      store.setProp("lang", key)
    },
    clearLang() {
      store.setProp("lang", "id")
    },
  }))

export interface ThemeStore extends Instance<typeof ThemeStoreModel> {}
export interface ThemeStoreSnapshot extends SnapshotOut<typeof ThemeStoreModel> {}

export enum LanguageCodeType {
  INDONESIA = "id",
}
