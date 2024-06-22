import { InvalidateQueryFilters, useMutation } from "@tanstack/react-query"
import { contactKeys } from "./contact.keys"
import { queryClient } from "app/libs/react-query"
import { contactApi } from "./contact"

export const useContactDelete = () => {
  return useMutation({
    mutationFn: contactApi.contactDelete,
    onSuccess: () => {
      queryClient.invalidateQueries(contactKeys.all as InvalidateQueryFilters)
    },
  })
}
