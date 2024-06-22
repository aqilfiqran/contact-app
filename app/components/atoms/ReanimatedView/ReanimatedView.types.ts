import { ReactNode } from "react"
import Reanimated from "react-native-reanimated"

export interface ReanimatedViewProps {
  children: ReactNode
  style?: typeof Reanimated.View["prototype"]["props"]["style"]
}
