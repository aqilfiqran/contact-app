import { IconLayout, IconLayoutProps } from "./Layout"

export function withIconLayout<T extends object>(WrappedComponent: any) {
  function WithIconLayout(props: IconLayoutProps & T) {
    const { containerStyle, onPress, padding, margin, ...iconProps } = props

    const layoutProps = {
      containerStyle,
      onPress,
      padding,
      margin,
    }

    return (
      <IconLayout {...layoutProps}>
        <WrappedComponent {...iconProps} />
      </IconLayout>
    )
  }

  return WithIconLayout
}
