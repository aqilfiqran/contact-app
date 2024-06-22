import { Platform, ViewStyle } from "react-native"

export type ShadowSizeType = "small" | "regular" | "large" | "tooltip" | "snackbar" | "stick"

export type ContainerShadowType = Record<ShadowSizeType, ViewStyle>

export const shadowStyle: ContainerShadowType = {
  large: {
    // box-shadow: 0px 10px 40px 0px #8C98A440;
    elevation: 2,
    shadowColor: "#8C98A4",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 40,
  },
  regular: {
    // box-shadow: 0px 6px 24px 0px #8C98A426;
    elevation: 2,
    shadowColor: "#8C98A4",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 24,
  },
  small: {
    // box-shadow: 0px 2px 12px 0px #8C98A40D;
    elevation: 2,
    shadowColor: "#8C98A4",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12,
  },
  tooltip: {
    // box-shadow: 0px 4px 16px 0px #BFD9FD40;
    elevation: 2,
    shadowColor: "#BFD9FD",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
  },
  snackbar: {
    // box-shadow: 0px 8px 16px 0px #8C98A426;
    elevation: 2,
    shadowColor: "#8C98A4",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 16,
  },
  stick: {
    // box-shadow: 0px -5px 15px 0px #8C98A433;
    elevation: 2,
    shadowColor: "#8C98A4",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    borderTopWidth: Platform.select({ ios: 0, android: 0.5 }),
    borderTopColor: "#E9E9E9",
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
}
