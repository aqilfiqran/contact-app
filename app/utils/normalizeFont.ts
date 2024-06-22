interface FontOptions {
  thin?: string
  light?: string
  normal: string
  medium?: string
  semiBold?: string
  bold?: string
}

/**
 * Helper for normalizing font,
 * resulting font with complete thin, light, normal, medium, semibold, and bold property
 */
export function normalizeFont(font: FontOptions) {
  return {
    thin: font.thin ?? font.light ?? font.normal,
    light: font.light ?? font.normal,
    normal: font.normal,
    medium: font.medium ?? font.normal,
    semiBold: font.semiBold ?? font.medium ?? font.normal,
    bold: font.bold ?? font.semiBold ?? font.medium ?? font.normal,
  }
}
