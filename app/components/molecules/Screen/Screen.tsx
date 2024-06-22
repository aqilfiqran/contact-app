import { useScrollToTop } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { useMemo, useRef, useState } from "react"
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  LayoutChangeEvent,
  Platform,
  ScrollView,
  View,
} from "react-native"
import {
  $containerStyle,
  $innerStyle,
  $keyboardAvoidingViewStyle,
  $outerStyle,
} from "./Screen.style"
import { AutoScreenProps, ScreenProps, ScrollScreenProps } from "./Screen.types"
import { Edge, useSafeAreaInsets } from "react-native-safe-area-context"
import { ReanimatedScrollView } from "app/components/atoms/ReanimatedScrollView"
import { Spacer } from "app/components/atoms/Spacer"
import { useTheme } from "app/theme/hooks/useTheme"
import { useOnLayout } from "app/utils/useOnLayout"
import { Footer as DefaultFooter } from "app/components/atoms/Footer"
import { Column } from "app/components/atoms/Container/Column"

const isIos = Platform.OS === "ios"

function isNonScrolling(preset?: ScreenProps["preset"]) {
  return !preset || preset === "fixed"
}

function useAutoPreset(props: AutoScreenProps) {
  const { preset, scrollEnabledToggleThreshold } = props
  const { percent = 0.92, point = 0 } = scrollEnabledToggleThreshold || {}

  const scrollViewHeight = useRef<number | null>(null)
  const scrollViewContentHeight = useRef<number | null>(null)
  const [scrollEnabled, setScrollEnabled] = useState(true)

  function updateScrollState() {
    if (scrollViewHeight.current === null || scrollViewContentHeight.current === null) {
      return
    }

    // check whether content fits the screen then toggle scroll state according to it
    const contentFitsScreen = (function () {
      if (point) {
        return scrollViewContentHeight.current < scrollViewHeight.current - point
      } else {
        return scrollViewContentHeight.current < scrollViewHeight.current * percent
      }
    })()

    // content is less than the size of the screen, so we can disable scrolling
    if (scrollEnabled && contentFitsScreen) {
      setScrollEnabled(false)
    }

    // content is greater than the size of the screen, so let's enable scrolling
    if (!scrollEnabled && !contentFitsScreen) {
      setScrollEnabled(true)
    }
  }

  function onContentSizeChange(w: number, h: number) {
    // update scroll-view content height
    scrollViewContentHeight.current = h
    updateScrollState()
  }

  function onLayout(e: LayoutChangeEvent) {
    const { height } = e.nativeEvent.layout
    // update scroll-view  height
    scrollViewHeight.current = height
    updateScrollState()
  }

  // update scroll state on every render
  if (preset === "auto") {
    updateScrollState()
  }

  return {
    scrollEnabled: preset === "auto" ? scrollEnabled : true,
    onContentSizeChange,
    onLayout,
  }
}

export function useSafeAreaInsetPadding(safeAreaEdges?: Edge[]) {
  const insets = useSafeAreaInsets()

  const insetStyles: any = {}
  safeAreaEdges?.forEach((edge: Edge) => {
    const paddingProp = `padding${edge.charAt(0).toUpperCase()}${edge.slice(1)}`
    insetStyles[paddingProp] = insets[edge]
  })

  return insetStyles
}

function ScreenWithoutScrolling(props: ScreenProps) {
  const { style, contentContainerStyle, children } = props
  return (
    <View style={[$outerStyle, style]}>
      <View style={[$innerStyle, contentContainerStyle]}>{children}</View>
    </View>
  )
}

function ScreenWithScrolling(props: ScreenProps) {
  const {
    children,
    keyboardShouldPersistTaps = "handled",
    contentContainerStyle,
    ScrollViewProps,
    style,
    animate,
    space = 0,
    onTranslate,
  } = props as ScrollScreenProps

  const ref = useRef<any>(null)

  const { scrollEnabled, onContentSizeChange, onLayout } = useAutoPreset(props as AutoScreenProps)

  // Add native behavior of pressing the active tab to scroll to the top of the content
  // More info at: https://reactnavigation.org/docs/use-scroll-to-top/
  useScrollToTop(ref)

  const Component = animate ? ReanimatedScrollView : ScrollView

  return (
    <Component
      {...{ keyboardShouldPersistTaps, scrollEnabled, ref }}
      {...ScrollViewProps}
      onLayout={(e) => {
        onLayout(e)
        ScrollViewProps?.onLayout?.(e)
      }}
      onContentSizeChange={(w: number, h: number) => {
        onContentSizeChange(w, h)
        ScrollViewProps?.onContentSizeChange?.(w, h)
      }}
      showsVerticalScrollIndicator={false}
      style={[$outerStyle, ScrollViewProps?.style, style]}
      contentContainerStyle={[
        $innerStyle,
        ScrollViewProps?.contentContainerStyle,
        contentContainerStyle,
      ]}
      nestedScrollEnabled={true}
      onTranslate={onTranslate}
    >
      {children}
      <Spacer length={space} />
    </Component>
  )
}

export function Screen(props: ScreenProps) {
  const theme = useTheme()
  const {
    backgroundColor = theme.colors.background,
    KeyboardAvoidingViewProps,
    keyboardOffset = 0,
    safeAreaEdges,
    StatusBarProps,
    statusBarStyle = "dark",
    Footer,
    loading,
    Header,
    FooterProps,
    keyboardFooterOffset = false,
    space = 0,
  } = props

  const insetPadding = useSafeAreaInsetPadding(safeAreaEdges)
  const { bottom } = useSafeAreaInsets()

  const footerLayout = useOnLayout()
  const FooterComponent = useMemo(() => DefaultFooter, [])
  const keyboardOffsetValue = useMemo(
    () => (keyboardFooterOffset ? keyboardOffset + footerLayout.height + +bottom : keyboardOffset),
    [footerLayout.height, keyboardFooterOffset, keyboardOffset, bottom],
  )

  return (
    <View style={[$containerStyle, { backgroundColor }, insetPadding]}>
      <StatusBar
        animated
        {...StatusBarProps}
        style={statusBarStyle}
        backgroundColor={theme.colors.transparent}
      />

      <Column contentStyle="fitContent">{Header}</Column>

      {loading && (
        <Column alignment="center" arrangement="center">
          <ActivityIndicator
            size="large"
            color={theme.colors.palette.primary.main}
            style={{ flex: 1 }}
          />
        </Column>
      )}
      {!loading && (
        <KeyboardAvoidingView
          behavior={isIos ? "padding" : undefined}
          keyboardVerticalOffset={keyboardOffsetValue}
          {...KeyboardAvoidingViewProps}
          style={[$keyboardAvoidingViewStyle, KeyboardAvoidingViewProps?.style]}
        >
          {isNonScrolling(props.preset) ? (
            <ScreenWithoutScrolling {...props} />
          ) : (
            <ScreenWithScrolling {...props} space={space + footerLayout.height} />
          )}
        </KeyboardAvoidingView>
      )}

      <FooterComponent {...FooterProps} onLayout={footerLayout.onLayout}>
        {Footer}
      </FooterComponent>
    </View>
  )
}
