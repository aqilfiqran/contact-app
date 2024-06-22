import { apiInstance } from "../api"
import {
  OptionsContactCreate,
  OptionsContactDelete,
  OptionsContactDetail,
  OptionsContactUpdate,
  ResponseContactCreate,
  ResponseContactDetail,
  ResponseContactList,
} from "./contact.types"

const contactList = () => apiInstance.get<ResponseContactList>("contact")

const contactDetail = ({ params }: OptionsContactDetail) =>
  apiInstance.get<ResponseContactDetail>(`contact/${params?.id}`)

const contactCreate = ({ body }: OptionsContactCreate) =>
  apiInstance.post<ResponseContactCreate>("contact", body)

const contactUpdate = ({ params, body }: OptionsContactUpdate) =>
  apiInstance.put<ResponseContactCreate>(`contact/${params?.id}`, body)

const contactDelete = ({ params }: OptionsContactDelete) =>
  apiInstance.delete<ResponseContactCreate>(`contact/${params?.id}`)

export const contactApi = {
  contactList,
  contactDetail,
  contactCreate,
  contactUpdate,
  contactDelete,
}
