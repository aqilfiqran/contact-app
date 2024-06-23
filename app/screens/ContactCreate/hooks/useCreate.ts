import { useNavigation } from "@react-navigation/native"
import { AppNavScreen } from "app/navigators"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { useContactCreate } from "app/services/api/contact"

// why null? because we want to use the default values
// how to make it required in
const schema = Yup.object().shape({
  firstName: Yup.string()
    .required("Nama depan wajib diisi")
    .matches(/^[a-zA-Z]+$/, "Nama depan harus berupa huruf"),
  lastName: Yup.string()
    .required("Nama belakang wajib diisi")
    .matches(/^[a-zA-Z]+$/, "Nama belakang harus berupa huruf"),
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

export function useCreate() {
  const navigation = useNavigation<AppNavScreen>()

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

  const { mutate, isLoading } = useContactCreate()

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
