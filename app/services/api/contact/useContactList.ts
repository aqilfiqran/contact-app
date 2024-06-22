import { useQuery } from "@tanstack/react-query"
import { contactKeys } from "./contact.keys"
import { contactApi } from "./contact"

export const useContactList = () => {
  return useQuery({
    queryKey: contactKeys.all,
    queryFn: contactApi.contactList,
    select: (response) => response.data.data,
  })
}
