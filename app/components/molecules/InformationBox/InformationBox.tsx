import { useTheme } from "app/theme/hooks/useTheme"
import { InformationBoxProps } from "./InformationBox.types"
import { border, spacing } from "app/theme"
import { createTextProps, Text } from "app/components/atoms/Text"
import { Column, Row } from "app/components/atoms/Container"
import { Icon, createIconProps } from "app/components/atoms/Icon"
import { Spacer } from "app/components/atoms/Spacer"

export function InformationBox(props: InformationBoxProps) {
  const {
    text,
    icon,
    preset = "filled",
    color = "info",
    customBgColor,
    customColor,
    children,
    alertContainerProps,
    containerProps,
  } = props
  const theme = useTheme()

  const $viewPreset = {
    filled: {
      backgroundColor: theme.colors.palette[color][500],
      textColor: theme.colors.palette.neutral[50],
    },
    lighted: {
      backgroundColor: theme.colors.palette[color][100],
      textColor: theme.colors.palette[color][500],
    },
  }

  const backgroundColor = customBgColor || $viewPreset[preset].backgroundColor
  const textColor = customColor || $viewPreset[preset].textColor

  const textProps = createTextProps(text)
  const iconProps = createIconProps(icon || { name: "adjust" })
  return (
    <Column
      height={40}
      backgroundColor={backgroundColor}
      arrangement="center"
      padding={{ h: spacing.small }}
      borderRadius={border.tiny}
      {...containerProps}
    >
      <Row alignment="center" {...alertContainerProps}>
        {!!icon && (
          <>
            <Icon size={16} color={textColor} name={"adjust"} {...iconProps} />
            <Spacer horizontal length={spacing.extraSmall} />
          </>
        )}
        {!children && (
          <Column>
            <Text preset="Text sm" color={textColor} {...textProps} />
          </Column>
        )}
        {children}
      </Row>
    </Column>
  )
}
