import { InvalidateQueryFilters, useMutation } from "@tanstack/react-query"
import { contactKeys } from "./contact.keys"
import { queryClient } from "app/libs/react-query"
import { contactApi } from "./contact"

export const useContactUpdate = () => {
  return useMutation({
    mutationFn: contactApi.contactUpdate,
    onSuccess: () => {
      queryClient.invalidateQueries(contactKeys.all as InvalidateQueryFilters)
    },
  })
}
