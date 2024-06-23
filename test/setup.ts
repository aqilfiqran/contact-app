// we always make sure 'react-native' gets included first
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as ReactNative from "react-native"


jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
)

jest.mock("i18n-js", () => ({
  currentLocale: () => "en",
  t: (key: string, params: Record<string, string>) => {
    return `${key} ${JSON.stringify(params)}`
  },
}))

declare const tron // eslint-disable-line @typescript-eslint/no-unused-vars

jest.useFakeTimers()
declare global {
  let __TEST__
}
