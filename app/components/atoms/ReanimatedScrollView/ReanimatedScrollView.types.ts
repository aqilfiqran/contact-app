import { ReactNode } from "react"
import Reanimated from "react-native-reanimated"

type ScrollViewProps = (typeof Reanimated.ScrollView)["prototype"]["props"]
// omit props that we don't need
type OmitScrollViewProps = Omit<ScrollViewProps, "onScroll" | "scrollEventThrottle">

export interface ReanimatedScrollViewProps extends OmitScrollViewProps {
  children: ReactNode

  onTranslate?: (x: number, y: number) => void
}
