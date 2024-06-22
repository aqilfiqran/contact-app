import { Control, FieldPath } from "react-hook-form"
import { TextFieldProps } from ".."

export interface CTextFieldProps<FieldValues> extends TextFieldProps {
  control: Control<FieldValues>
  name: FieldPath<FieldValues>
}
