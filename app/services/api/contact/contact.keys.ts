import { OptionsContactDetail } from "./contact.types"

export const contactKeys = {
  all: [{ namespace: "contact" }] as const,
  details: () => [{ entity: "detail", ...contactKeys.all[0] }] as const,
  detail: (options: OptionsContactDetail) => [{ ...contactKeys.details()[0], options }] as const,
}
