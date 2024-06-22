import { IContact } from "app/services/api/contact"

export interface CardContactProps {
  data: IContact
  onPress?: () => void
}
