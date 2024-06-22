declare module "react-native-config" {
  interface Env {
    ENV: string
    APP_NAME: string
    VERSION_NAME: string
    VERSION_CODE: string

    API_URL: string
  }

  const Config: Env

  export default Config
}
