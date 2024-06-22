import { InvalidateQueryFilters, useMutation } from "@tanstack/react-query"
import { contactKeys } from "./contact.keys"
import { queryClient } from "app/libs/react-query"
import { contactApi } from "./contact"
import { Alert } from "react-native"

export const useContactCreate = () => {
  return useMutation({
    mutationFn: contactApi.contactCreate,
    onSuccess: () => {
      queryClient.invalidateQueries(contactKeys.all as InvalidateQueryFilters)
    },
    onError: () => {
      Alert.alert("Error", "Gagal menyimpan data kontak. Silahkan coba lagi.")
    },
  })
}
