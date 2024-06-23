import { MMKV } from "react-native-mmkv"
import { ClientStorage } from "./storage"

// fixtures
const storage = new MMKV()
const clientStorage = new ClientStorage(storage)
const VALUE_OBJECT = { x: 1 }
const VALUE_STRING = JSON.stringify(VALUE_OBJECT)

const VALUE_OBJECT_2 = { x: 2 }
const VALUE_STRING_2 = JSON.stringify(VALUE_OBJECT_2)

beforeEach(() => {
  storage.set("something", VALUE_STRING)
})
afterEach(() => jest.clearAllMocks())

test("load", () => {
  expect(clientStorage.load<typeof VALUE_OBJECT>("something")).toEqual(JSON.parse(VALUE_STRING))
  expect(clientStorage.load<typeof VALUE_OBJECT>("something_not_exist")).toBeNull()
})

test("loadString", () => {
  expect(clientStorage.loadString("something")).toEqual(VALUE_STRING)
  expect(clientStorage.loadString("something_not_exist")).toBeNull()
})

test("save", () => {
  clientStorage.save("something", VALUE_OBJECT_2)
  expect(clientStorage.loadString("something")).toEqual(VALUE_STRING_2)
})

test("saveString", () => {
  clientStorage.saveString("something", VALUE_STRING_2)
  expect(clientStorage.loadString("something")).toEqual(VALUE_STRING_2)
})

test("remove", () => {
  clientStorage.remove("something")
  expect(clientStorage.loadString("something")).toBeNull()
})
