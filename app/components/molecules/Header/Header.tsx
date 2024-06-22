import { isRTL } from "app/i18n"
import { TouchableOpacity, View } from "react-native"
import {
  $actionFillerContainer,
  $actionIconContainer,
  $actionTextContainer,
  $container,
  $title,
  $titleWrapperCenter,
  $titleWrapperFlex,
  $titleWrapperLeft,
} from "./Header.style"
import { HeaderActionProps, HeaderProps } from "./Header.types"
import { Row } from "../../atoms/Container"
import { Text, createTextProps } from "../../atoms/Text"
import { useSafeAreaInsetsStyle } from "app/utils/useSafeAreaInsetsStyle"
import { useTheme } from "app/theme/hooks/useTheme"
import { createIconProps } from "app/components/atoms/Icon/Icon.config"
import { Icon } from "app/components/atoms/Icon"
import { ReanimatedView } from "app/components/atoms/ReanimatedView"

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 * The Header is meant to be used with the `screenOptions.header` option on navigators, routes, or screen components via `navigation.setOptions({ header })`.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Header.md)
 */
export function Header(props: HeaderProps) {
  const theme = useTheme()
  const {
    height = 46,
    backgroundColor = theme.colors.palette.neutral.contrastText,
    LeftActionComponent,
    leftIcon,
    leftText,
    onLeftPress,
    onRightPress,
    RightActionComponent,
    rightIcon,
    rightText,
    safeAreaEdges = ["top"],
    title,
    titleIcon,
    titleMode = "center",
    titleContainerStyle: $titleContainerStyleOverride,
    TitleActionComponent,
    style: $styleOverride,
    containerStyle: $containerStyleOverride,
    animatedStyle,
  } = props

  const $containerInsets = useSafeAreaInsetsStyle(safeAreaEdges)

  const titleProps = createTextProps(title)

  return (
    <ReanimatedView style={animatedStyle}>
      <View style={[$container, $containerInsets, { backgroundColor }, $containerStyleOverride]}>
        <Row arrangement="between" alignment="center" height={height} style={$styleOverride}>
          <HeaderAction
            text={leftText}
            icon={leftIcon}
            onPress={onLeftPress}
            backgroundColor={backgroundColor}
            ActionComponent={LeftActionComponent}
          />

          {!!title && (
            <View
              style={[
                titleMode === "center" && $titleWrapperCenter,
                titleMode === "flex" && $titleWrapperFlex,
                titleMode === "left" && $titleWrapperLeft,
                $titleContainerStyleOverride,
              ]}
              pointerEvents="none"
            >
              <Text preset="Text lg" {...titleProps} style={[$title, titleProps?.style]} />
            </View>
          )}

          {!!TitleActionComponent && (
            <HeaderAction
              icon={titleIcon}
              backgroundColor={backgroundColor}
              ActionComponent={TitleActionComponent}
            />
          )}

          <HeaderAction
            text={rightText}
            icon={rightIcon}
            onPress={onRightPress}
            backgroundColor={backgroundColor}
            ActionComponent={RightActionComponent}
          />
        </Row>
      </View>
    </ReanimatedView>
  )
}

function HeaderAction(props: HeaderActionProps) {
  const theme = useTheme()
  const { backgroundColor, text, icon, onPress, ActionComponent } = props

  if (ActionComponent) {
    return ActionComponent
  }

  if (text) {
    const textProps = createTextProps(text)
    return (
      <TouchableOpacity
        style={[$actionTextContainer, { backgroundColor }]}
        onPress={onPress}
        disabled={!onPress}
      >
        <Text preset="Text md" {...textProps} />
      </TouchableOpacity>
    )
  }

  if (icon) {
    const iconProps = createIconProps(icon)
    return (
      <Icon
        size={24}
        color={theme.colors.palette.neutral.main}
        onPress={onPress}
        containerStyle={[
          $actionIconContainer,
          { backgroundColor },
          isRTL && { transform: [{ rotate: "180deg" }] },
        ]}
        name={iconProps?.name || "chevron-right"}
        {...iconProps}
      />
    )
  }

  return <View style={[$actionFillerContainer, { backgroundColor }]} />
}
