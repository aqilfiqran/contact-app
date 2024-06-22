/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
export const border = {
  micro: 2,
  tiny: 4,
  extraSmall: 6,
  small: 8,
  medium: 12,
  large: 16,
  extraLarge: 24,
  full: 999,
} as const

export type Border = keyof typeof border
