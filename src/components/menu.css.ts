import { style, keyframes } from "@vanilla-extract/css"
import { calc } from "@vanilla-extract/css-utils"
import { theme } from "../styles/theme.css"
import { colors } from "../styles/colors.css"

const breakpoints = ["40em", "52em", "64em"]

const backgroundEffect = keyframes({
  "0%": {
    backgroundPosition: "0% 0%",
  },
  "25%": {
    backgroundPosition: "40% 10%",
  },
  "50%": {
    backgroundPosition: "0 10%",
  },
  "75%": {
    backgroundPosition: "10% 40%",
  },
  "100%": {
    backgroundPosition: "0% 0%",
  },
})

export const media = {
  small: `screen and (min-width: ${breakpoints[0]})`,
  medium: `screen and (min-width: ${breakpoints[1]})`,
  large: `screen and (min-width: ${breakpoints[2]})`,
}

export const navbarHeader = style({
  zIndex: "500",
  position: "fixed",
  //backgroundColor: "#dcaa6854",
  width: "100%",
})
export const navbarHeaderNav = style({
  zIndex: "5000",
  width: "100%",
  padding: "1rem",
})

export const logoLink = style({
  height: "30px",
  width: "30px",

  ":hover": { color: colors.lightyellow },

  "@media": {
    [media.small]: { height: "50px", width: "50px" },
  },
})

export const menuButton = style({
  border: "none",
  background: "none",
  cursor: "pointer",
  mixBlendMode: "difference",
})

export const menuContainer = style({
  display: "none",
})

export const menuSecondaryBackground = style({
  background: colors.green,
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  position: "fixed",
  height: "100%",
  width: "100%",
  zIndex: "-2",
})

export const menuLayer = style({
  background: colors.yellow,
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  position: "fixed",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  zIndex: "-1",
})

export const menuLayerWrapper = style({
  position: "relative",
})

export const menuCityBackground = style({
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  position: "absolute",
  height: "100%",
  width: "100%",
  opacity: "0",
  animation: `30s infinite ${backgroundEffect}`,
})

export const menuLink = style({
  display: "none",
  top: "0",
  left: "0",
  right: "0",
  position: "fixed",
  height: "100%",
  width: "100%",
})

export const menuLinklist = style({
  margin: "0",
  padding: "0",
  height: "100%",
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
})

export const menuLinklistItem = style({
  listStyle: "none",
  fontWeight: theme.fontWeights.bold,
  cursor: "pointer",
  whiteSpace: "nowrap",
  paddingTop: "0.7rem",
  paddingBottom: "0.7rem",
  position: "relative",
  width: "100%",
  "@media": {
    [media.medium]: {
      fontWeight: theme.fontWeights.extrabold,
    },
    [media.large]: {
      fontWeight: theme.fontWeights.extrabold,
    },
  },
})

export const menuLinkItem = style({
  color: colors.darkbrown,
  fontSize: theme.fontSizes[4],
  fontWeight: theme.fontWeights.extrabold,
  textDecoration: "none",
  textShadow: "2px 2px #000",
  ":hover": {
    color: colors.green,
    textShadow: "2px 2px #5f310e",
  },
})

export const location = style({
  position: "relative",
  fontWeight: theme.fontWeights.bold,
  fontSize: theme.fontSizes[5],
  fontFamily: theme.fonts.mono,
  lineHeight: theme.lineHeights.tight,
  letterSpacing: theme.letterSpacings.wide,
  color: colors.green,
})

export const span = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: theme.fontSizes[3],
  fontWeight: theme.fontWeights.bold,
  lineHeight: theme.lineHeights.tight,
  letterSpacing: theme.letterSpacings.wide,
  color: colors.darkbrown,
  fontFamily: theme.fonts.mono,
  textTransform: "uppercase",
  zIndex: "20",
  cursor: "pointer",
  paddingRight: "0.7rem",
  paddingLeft: "0.7rem",
  whiteSpace: "nowrap",
  transition: "0.3s ease-in-out",
  paddingTop: "0.5em",
  paddingBottom: "0.5em",
  ":hover": {
    color: colors.green,
  },
  "@media": {
    [media.medium]: {
      paddingTop: "0",
      paddingBottom: "0",
    },
    [media.large]: {
      paddingTop: "0",
      paddingBottom: "0",
    },
  },
})
export const cities = style({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  borderTop: "solid 2px #000",
  visibility: "hidden",
  "@media": {
    [media.medium]: {
      flexDirection: "row",
    },
    [media.large]: {
      flexDirection: "row",
      visibility: "visible",
    },
  },
})

export const menuTextWrapper = style({
  display: "none",
  width: "80%",
  "@media": {
    [media.small]: {
      display: "block",
    },
    [media.large]: {
      display: "block",
    },
  },
})
