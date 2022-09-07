import { globalStyle, globalKeyframes } from "@vanilla-extract/css"
import { theme } from "./theme.css"
import background from "../images/background-main.png"
import { colors } from "./colors.css"

globalStyle("body", {
  height: "100%",
  margin: 0,
  padding: 0,
  overflowX: "hidden",
  color: theme.colors.darkbrown,
  backgroundRepeat: "repeat",
  background: `linear-gradient(0deg, rgba(250, 221, 187, 0.95), rgba(250, 221, 187, 0.95)), url(${background})`,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
})

globalStyle("*", {
  boxSizing: "border-box",
})

globalStyle("h2", {
  fontFamily: theme.fonts.subheading,
})

globalStyle("h1, h2, h3, p", {
  fontWeight: "400",
  overflowWrap: "break-word",
  margin: 0,
})
globalStyle("footer", {
  backgroundColor: colors.darkbrown,
})

globalStyle("a", {
  textDecoration: "none",
})
globalStyle("ul", {
  listStyle: "none",
})

globalStyle("img, video, svg", {
  display: "block",
})

globalKeyframes("zoomInUp", {
  "0%": {
    transform: "scale(0.95) translateY(10px) translateX(-50%)",
    visibility: "hidden",
    opacity: 0,
  },
  "100%": {
    opacity: 1,
    transform: "scale(1), translateY(0) translateX(-50%)",
    visibility: "visible",
  },
})

globalKeyframes("zoomOutDown", {
  "0%": {
    transform: "scale(1) translateY(0) translateX(-50%)",
    opacity: 1,
  },
  "100%": {
    opacity: 0,
    transform: "scale(0.95) translateY(10px) translateX(-50%)",
    visibility: "hidden",
  },
})

globalKeyframes("fadeIn", {
  "0%": {
    visibility: "hidden",
    opacity: 0,
  },
  "100%": {
    opacity: 1,
    visibility: "visible",
  },
})

globalKeyframes("fadeOut", {
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
    visibility: "hidden",
  },
})
globalKeyframes("backgroundEffect", {
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
