import { style, keyframes } from "@vanilla-extract/css"
import { theme } from "../styles/theme.css"
import { colors } from "../styles/colors.css"

const breakpoints = ["40em", "52em", "64em"]

export const media = {
  small: `screen and (min-width: ${breakpoints[0]})`,
  medium: `screen and (min-width: ${breakpoints[1]})`,
  large: `screen and (min-width: ${breakpoints[2]})`,
}

export const heroContainer = style({
  position: "relative",
  overflow: "hidden",
  height: "75vh",
})

export const backgroundImage = style({
  zIndex: "-1",
  position: "absolute",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%",
  marginTop: "-10%",
})

export const categoryHeading = style({
  zIndex: "5",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
})

export const gridImageWrapper = style({
  height: "250px",
  overflow: "hidden",
})