import { style, keyframes } from "@vanilla-extract/css"
// import { theme } from "../styles/theme.css"
// import { colors } from "../styles/colors.css"

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
  height: "210px",
  overflow: "hidden",
  transition: "0.4s ease",
  ":hover": {
    transform: "scale(1.08)",
  },
  "@media": {
    [media.small]: { height: "180px" },
    [media.medium]: { height: "180px" },
    [media.large]: {
      height: "250px",
      maxWidth: "550px",
    },
  },
})

export const infoImageWrapper = style({
  maxHeight: "450px",
  overflow: "hidden",
  transition: "0.4s ease",
  ":hover": {
    transform: "scale(1.08)",
  },
})

export const Flexbox = style({
  display: "flex",
  flexWrap: "wrap",
})
export const FlexboxItem = style({
  flex: "100%",
  "@media": {
    [media.small]: { flex: "50%" },
    [media.medium]: { flex: "33.33%" },
  },
})
