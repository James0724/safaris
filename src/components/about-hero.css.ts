import { style } from "@vanilla-extract/css"
import { theme } from "../styles/theme.css"
import { media } from "./ui.css"

// specific maxWidths are to support design and
// current length of content in the Header and Text

export const aboutHeroText = style({
  fontSize: theme.fontSizes[3],
  marginBottom: theme.space[5],
  maxWidth: "798px",
  "@media": {
    [media.small]: {
      fontSize: theme.fontSizes[4],
    },
  },
})

export const aboutHeroImage = style({
  width: "100%",
})
