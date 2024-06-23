import { useNavigation, useRoute } from "@react-navigation/native"
import { AppNavScreen, AppRouteProp } from "app/navigators"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { useContactDetail, useContactUpdate } from "app/services/api/contact"
import { useEffect } from "react"

// why null? because we want to use the default values
// how to make it required in
const schema = Yup.object().shape({
  firstName: Yup.string().trim().required("Nama depan wajib diisi"),
  lastName: Yup.string().trim().required("Nama belakang wajib diisi"),
  age: Yup.string()
    .trim()
    .required("Umur wajib diisi")
    .matches(/^\d+$/, "Umur harus berupa angka")
    .test("max", "Umur tidak boleh lebih dari 150 tahun", (value) => {
      if (!value) {
        return true
      }
      return parseInt(value, 10) <= 150
    }),
  photo: Yup.string()
    .trim()
    .required("Foto wajib diisi")
    // make url but bypass N/A
    .test("url", "Foto harus berupa URL", (value) => {
      if (value === "N/A") {
        return true
      }
      return Yup.string().url().isValidSync(value)
    }),
})

type Schema = {
  firstName: string
  lastName: string
  age: number
  photo: string
}

export function useUpdate() {
  const navigation = useNavigation<AppNavScreen>()
  const router = useRoute<AppRouteProp<"ContactUpdate">>()
  const { id } = router.params

  const { data } = useContactDetail({
    params: { id },
  })

  const form = useForm({
    mode: "all",
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      photo: "",
    },
  })

  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty },
  } = form

  useEffect(() => {
    if (!data) return

    form.reset({
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age.toString(),
      photo: data.photo,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const { mutate, isLoading } = useContactUpdate()

  const handleSave = (values: Schema) => {
    mutate(
      {
        body: values,
        params: { id },
      },
      {
        onSuccess: () => {
          navigation.goBack()
        },
      },
    )
  }

  return {
    handleSubmit,
    isDirty,
    isValid,
    control,
    isLoading,
    handleSave,
  }
}
