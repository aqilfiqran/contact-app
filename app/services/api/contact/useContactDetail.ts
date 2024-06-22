import { useQuery } from "@tanstack/react-query"
import { contactKeys } from "./contact.keys"
import { contactApi } from "./contact"
import { OptionsContactDetail } from "./contact.types"

export const useContactDetail = (options: OptionsContactDetail) => {
  return useQuery({
    queryKey: contactKeys.detail(options),
    queryFn: ({ queryKey: [{ options }] }) => contactApi.contactDetail(options),
    select: (response) => response.data.data,
  })
}
