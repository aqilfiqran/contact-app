import { StyleSheet, ViewStyle } from "react-native"
import {
  ContainerAlignmentType,
  ContainerArrangementType,
  ContainerBorderColorType,
  ContainerBorderRadiusType,
  ContainerBorderWidthType,
  ContainerContentType,
  ContainerMarginType,
  ContainerPaddingType,
  ContainerShadowOffsetType,
} from "./Container.types"

export const ContainerContentStyle = StyleSheet.create<Record<ContainerContentType, ViewStyle>>({
  fillContainer: { flex: 1 },
  fitContent: {},
  fixed: {},
})

export const ContainerAlignmentStyle = StyleSheet.create<Record<ContainerAlignmentType, ViewStyle>>(
  {
    center: {
      alignItems: "center",
    },
    end: {
      alignItems: "flex-end",
    },
    start: {
      alignItems: undefined,
    },
  },
)

export const ContainerArrangementStyle = StyleSheet.create<
  Record<ContainerArrangementType, ViewStyle>
>({
  around: {
    justifyContent: "space-around",
  },
  between: {
    justifyContent: "space-between",
  },
  center: {
    justifyContent: "center",
  },
  leading: {
    justifyContent: "flex-start",
  },
  trailing: {
    justifyContent: "flex-end",
  },
})

export const createContainerPaddingStyle = (padding?: ContainerPaddingType) => {
  if (typeof padding === "undefined") {
    return undefined
  }

  if (typeof padding === "number") {
    return StyleSheet.create({
      padding: { padding },
    })
  }

  return StyleSheet.create({
    padding: {
      paddingBottom: padding.b,
      paddingHorizontal: padding.h,
      paddingLeft: padding.l,
      paddingRight: padding.r,
      paddingTop: padding.t,
      paddingVertical: padding.v,
    },
  })
}

export const createContainerMarginStyle = (margin?: ContainerMarginType) => {
  if (typeof margin === "undefined") {
    return undefined
  }

  if (typeof margin === "number") {
    return StyleSheet.create({
      margin: { margin },
    })
  }

  return StyleSheet.create({
    margin: {
      marginBottom: margin.b,
      marginHorizontal: margin.h,
      marginLeft: margin.l,
      marginRight: margin.r,
      marginTop: margin.t,
      marginVertical: margin.v,
    },
  })
}

export const createBorderRadiusStyle = (
  borderRadius?: ContainerBorderRadiusType,
  defaultValue?: number,
) => {
  if (typeof borderRadius === "undefined") {
    return StyleSheet.create({
      borderRadius: {
        borderRadius: defaultValue,
      },
    })
  }

  if (typeof borderRadius === "number") {
    return StyleSheet.create({
      borderRadius: {
        borderRadius,
      },
    })
  }

  return StyleSheet.create({
    borderRadius: {
      borderBottomLeftRadius: borderRadius.bl,
      borderBottomRightRadius: borderRadius.br,
      borderTopLeftRadius: borderRadius.tl,
      borderTopRightRadius: borderRadius.tr,
    },
  })
}

export const createBorderWidthStyle = (borderWidth?: ContainerBorderWidthType) => {
  if (typeof borderWidth === "undefined") {
    return undefined
  }

  if (typeof borderWidth === "number") {
    return StyleSheet.create({
      borderWidth: {
        borderWidth,
      },
    })
  }

  return StyleSheet.create({
    borderWidth: {
      borderBottomWidth: borderWidth.b,
      borderLeftWidth: borderWidth.l,
      borderRightWidth: borderWidth.r,
      borderTopWidth: borderWidth.t,
    },
  })
}

export const createBorderColorStyle = (borderColor?: ContainerBorderColorType) => {
  if (typeof borderColor === "undefined") {
    return undefined
  }

  if (typeof borderColor === "string") {
    return StyleSheet.create({
      borderColor: {
        borderColor,
      },
    })
  }

  return StyleSheet.create({
    borderColor: {
      borderBottomColor: borderColor.b,
      borderLeftColor: borderColor.l,
      borderRightColor: borderColor.r,
      borderTopColor: borderColor.t,
    },
  })
}

export const createShadowOffsetStyle = (shadowOffset?: ContainerShadowOffsetType) => {
  if (typeof shadowOffset === "undefined") {
    return undefined
  }

  return StyleSheet.create({
    shadowOffset: {
      shadowOffset: {
        height: shadowOffset.h ?? 0,
        width: shadowOffset.w ?? 0,
      },
    },
  })
}
