import { ImageProps } from "./Image.types"
import { createImageSizeStyle } from "./Image.styles"
import SkeletonPlaceholder from "react-native-skeleton-placeholder"
import { useState } from "react"
import { Column } from "../Container/Column"
import { Image as PrimitiveImage } from "react-native"
import { Box } from "../Container"

export function Image(props: ImageProps) {
  const { size, style: $styleOverride, source, loading: loadingOverride, ...rest } = props

  const [loading, setLoading] = useState(false)

  const ImageSizeStyle = createImageSizeStyle(size)
  const $styles = [ImageSizeStyle?.size, $styleOverride]

  if (loadingOverride) {
    return (
      <Column>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item
            width={ImageSizeStyle?.size.width}
            height={ImageSizeStyle?.size.height}
          />
        </SkeletonPlaceholder>
      </Column>
    )
  }

  return (
    <Column style={$styles}>
      <PrimitiveImage
        source={source}
        style={$styles}
        {...rest}
        onLoadEnd={() => setLoading(false)}
      />
      {loading && (
        <Box top={0} right={0} left={0} bottom={0}>
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item
              width={ImageSizeStyle?.size.width}
              height={ImageSizeStyle?.size.height}
            />
          </SkeletonPlaceholder>
        </Box>
      )}
    </Column>
  )
}

export default Image
