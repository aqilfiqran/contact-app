import { Controller } from "react-hook-form"
import { CTextFieldProps } from "./CTextField.types"
import { TextField } from "../TextField"

export const CTextField = <T,>({ control, name, ...textFieldProps }: CTextFieldProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => {
        const error =
          fieldState.isTouched && (fieldState.error?.message ?? textFieldProps?.error ?? undefined)

        const onChangeText = (text: string) => {
          // in bottom sheet, autoCapitalize="characters" not working
          if (textFieldProps?.autoCapitalize === "characters") {
            field.onChange(text?.toUpperCase())
            return
          }

          field.onChange(text)
        }

        return (
          <TextField
            value={field.value as string}
            onChangeText={onChangeText}
            onBlur={field.onBlur}
            {...textFieldProps}
            error={error}
            disabled={formState.isSubmitting || formState.isLoading || textFieldProps.disabled}
          />
        )
      }}
    />
  )
}
