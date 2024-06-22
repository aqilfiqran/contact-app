import { observer } from "mobx-react-lite"
import { Box, BoxProps } from "../Container"
import Reanimated from "react-native-reanimated"

export interface FooterProps extends BoxProps {}

export const Footer = observer(function Footer(props: FooterProps) {
  const { children, bottom = 0, withSafeArea = "bottomOnly", ...rest } = props

  return (
    <Box bottom={bottom} left={0} right={0} {...rest} withSafeArea={withSafeArea}>
      {children}
    </Box>
  )
})

export const ReanimatedFooter = Reanimated.createAnimatedComponent(Footer)
