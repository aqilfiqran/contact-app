import { useNavigation, useRoute } from "@react-navigation/native"
import { AppNavScreen, AppRouteProp } from "app/navigators"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { useContactDetail, useContactUpdate } from "app/services/api/contact"

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
  photo: Yup.string().trim().required("Foto wajib diisi").url("Foto harus berupa URL"),
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

  const {
    data = {
      firstName: "",
      lastName: "",
      age: "",
      photo: "",
    },
  } = useContactDetail({
    params: { id: router.params.id },
  })

  const form = useForm({
    mode: "all",
    resolver: yupResolver(schema),
    defaultValues: {
      ...data,
      age: data.age.toString(),
    },
  })

  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty },
  } = form

  const { mutate, isLoading } = useContactUpdate()

  const handleSave = (values: Schema) => {
    mutate(
      {
        body: values,
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
