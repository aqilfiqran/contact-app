import { Column } from "../Container/Column"
import { SpacerProps } from "./Spacer.types"
import { memo } from "react"

export function DefaultSpacer(props: SpacerProps) {
  const { length, minLength, horizontal } = props

  if (horizontal) {
    return <Column width={length} height="100%" />
  }

  return <Column height={length} minHeight={minLength} />
}

export const Spacer = memo(DefaultSpacer, (prev, next) => {
  return prev.length === next.length && prev?.horizontal === next?.horizontal
})

Spacer.displayName = "Spacer"
