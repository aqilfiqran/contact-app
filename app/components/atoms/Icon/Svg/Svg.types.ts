/**
 * To generate the list of icons type, run the following command:
 *
 * 1. uncomment the following code
 * 2. copy the output from the console
 * 3. paste it in the IconType type
 */
// import _ from "lodash"
// const icons = require("./icons.json").icons
// const iconNames = _.map(icons, "properties.name")
// console.tron.log(`"${iconNames.join('" | "')}"`)

export interface IconSvgProps {
  preset?: "svg"
  name: IconSvgType
}

export type IconSvgType =
  | "chevron-left"
  | "chevron-right"
  | "file-remove-inlc"
  | "file-search-oulc"
  | "remove"
  | "mail"
  | "phone-add"
  | "phone-block"
