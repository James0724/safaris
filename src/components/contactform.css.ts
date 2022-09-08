import { style, keyframes } from "@vanilla-extract/css"
// import { theme } from "../styles/theme.css"
import { colors } from "../styles/colors.css"

const breakpoints = ["40em", "52em", "64em"]

export const media = {
  small: `screen and (min-width: ${breakpoints[0]})`,
  medium: `screen and (min-width: ${breakpoints[1]})`,
  large: `screen and (min-width: ${breakpoints[2]})`,
}

export const contactFormContainer = style({
  background: colors.grey,
  padding: "0.5rem",
  width: "100%",
  "@media": {
    [media.medium]: { width: "75%", padding: "1rem" },
    [media.large]: { width: "75%", padding: "1rem" },
  },
})

export const underlineForm = style({
  margin: "-0.512em auto",
  width: "60px",
  "@media": {
    [media.small]: { height: "60px" },
    [media.medium]: { height: "70px" },
    [media.large]: { height: "80px" },
  },
})
export const logoWrapper = style({
  height: "120px",
  width: "120px",

  "@media": {
    [media.small]: { height: "180px", width: "180px" },
  },
})

export const formContainer = style({
  border: "solid 3px #474544",
  margin: "auto",
  position: "relative",
})
