import { style } from "@vanilla-extract/css"
// import { theme } from "../styles/theme.css"
// import { colors } from "../styles/colors.css"

const breakpoints = ["40em", "52em", "64em"]

export const media = {
  small: `screen and (min-width: ${breakpoints[0]})`,
  medium: `screen and (min-width: ${breakpoints[1]})`,
  large: `screen and (min-width: ${breakpoints[2]})`,
}

export const packageItinaryTitleContainer = style({
  display: "flex",
  flexWrap: "wrap",
})
export const infoItem = style({
  paddingTop: "2px",
  paddingBottom: "2px",
  paddingLeft: "5px",
  paddingRight: "2rem",
  whiteSpace: "nowrap",
  fontSize: "12px",
})
