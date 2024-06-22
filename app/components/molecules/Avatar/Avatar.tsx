import { TextPresets, Weights } from "app/components/atoms/Text/Text.types"
import { $image } from "./Avatar.styles"
import { AvatarProps } from "./Avatar.types"
import { border } from "app/theme/border"
import { useTheme } from "app/theme/hooks/useTheme"
import { ImageProps } from "react-native"
import { Column } from "app/components/atoms/Container"
import { Image } from "app/components/atoms/Image"
import { Text } from "app/components/atoms/Text"
import React from "react"

export function Avatar(props: AvatarProps) {
  const theme = useTheme()
  const { colors } = theme
  const {
    shape = "circle",
    source,
    size = "large",
    text = "A",
    color = theme.colors.palette.primary[500],
    textProps,
    customSize,
    customStyle: $customStyle,
  } = props

  const [errorImage, setErrorImage] = React.useState(false)

  const avatarSize = {
    tiny: {
      size: 24,
      textPreset: "b12" as TextPresets,
      textWeight: "bold" as Weights,
    },
    small: {
      size: 34,
      textPreset: "b16" as TextPresets,
      textWeight: "bold" as Weights,
    },
    medium: {
      size: 46,
      textPreset: "h20" as TextPresets,
      textWeight: "bold" as Weights,
    },
    large: {
      size: 56,
      textPreset: "h24" as TextPresets,
      textWeight: "bold" as Weights,
    },
    xlarge: {
      size: 80,
      textPreset: "h30" as TextPresets,
      textWeight: "bold" as Weights,
    },
  }

  const $sizeStyle = customSize || avatarSize[size].size

  const borderRadiusStyle = shape === "circle" ? 9999 : border.small

  const $imageBorderRadiusStyle: ImageProps["style"] =
    shape === "circle"
      ? { borderRadius: 9999, borderWidth: 0.1, borderColor: colors.palette.neutral.main }
      : { borderRadius: border.micro }
  const $imageStyles = [$image, $imageBorderRadiusStyle, $customStyle]

  const isImage = !!source && !errorImage

  return (
    <Column
      alignment="center"
      arrangement="center"
      backgroundColor={!isImage ? color : undefined}
      width={$sizeStyle}
      height={$sizeStyle}
      borderRadius={borderRadiusStyle}
      style={$customStyle}
    >
      {isImage ? (
        <Image
          source={source}
          resizeMode="cover"
          style={$imageStyles}
          onError={() => {
            setErrorImage(true)
          }}
        />
      ) : (
        <Text
          preset={avatarSize[size].textPreset}
          weight={avatarSize[size].textWeight}
          color={theme.colors.palette.neutral.contrastText}
          {...textProps}
        >
          {text?.toUpperCase()}
        </Text>
      )}
    </Column>
  )
}
