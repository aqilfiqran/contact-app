const { defaults: tsjPreset } = require("ts-jest/presets")
const tsconfig = require("./tsconfig.json")
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig)

/** @type {import('@jest/types').Config.ProjectConfig} */
module.exports = {
  ...tsjPreset,
  moduleNameMapper,
  preset: "jest-expo",
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)",
    "jest-runner",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.maestro/", "@react-native",],
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/test/setup.ts"],
}
