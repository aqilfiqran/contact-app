import { ButtonPropsType, ContainerConfigProps } from "app/components/atoms"

export interface EmptyStateProps {
  title: string
  description?: string
  button?: ButtonPropsType

  containerProps?: ContainerConfigProps
}
