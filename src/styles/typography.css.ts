import { FontMetrics } from "@capsizecss/core"
import interFontMetrics from "@capsizecss/metrics/inter"
import { createTextStyle } from "@capsizecss/vanilla-extract"
import { style } from "@vanilla-extract/css"

interface Meta {
  fallback: string
  file: string
  format: string
  metrics: FontMetrics
  name: string
  wghtRange: string
  wghts: {
    [key: string]: number
  }
}

type FontFamilyId = "JUNGLE" | "EUPHORIGENIC"

type Fonts = Record<FontFamilyId, Meta>

const FONT_DIR = `/fonts`

export const fonts: Fonts = {
  EUPHORIGENIC: {
    fallback: `sans-serif`,
    file: `${FONT_DIR}/Euphorigenic.woff2`,
    format: `truetype-variations`,
    metrics: interFontMetrics,
    name: `Euphorigenic`,
    wghtRange: `100 900`,
    wghts: {
      "400": 400,
      "700": 700,
    },
  },

  JUNGLE: {
    fallback: `sans-serif`,
    file: `${FONT_DIR}/Jungle Fever NF.woff2`,
    format: `truetype-variations`,
    metrics: interFontMetrics,
    name: `Jungle fever`,
    wghtRange: `100 900`,
    wghts: {
      "400": 400,
      "700": 700,
    },
  },
}

// https://type-scale.com
// Major Third
// base: 16
const typeScale = {
  s: 12.8,
  m: 16,
  l: 20,
  xl: 25,
}

interface Props {
  id: FontFamilyId
  leading: number
  size: number
}

function calcFontCss({ id, leading, size }: Props) {
  return style([
    createTextStyle({
      fontMetrics: fonts[id].metrics,
      fontSize: size,
      leading,
    }),
    {
      fontFamily: `"${fonts[id].name}", ${fonts[id].fallback}`,
    },
  ])
}

type StyleId =
  | "JUNGLE_SMALL"
  | "JUNGLE_LARGE"
  | "EUPHORIGENIC_SMALL"
  | "EUPHORIGENIC_LARGE"

export const fontStyles: Record<StyleId, string> = {
  JUNGLE_SMALL: calcFontCss({
    id: "JUNGLE",
    leading: 16.5,
    size: typeScale.s,
  }),

  JUNGLE_LARGE: calcFontCss({
    id: "JUNGLE",
    leading: 25,
    size: typeScale.l,
  }),
  EUPHORIGENIC_SMALL: calcFontCss({
    id: "JUNGLE",
    leading: 16.5,
    size: typeScale.xl,
  }),
  EUPHORIGENIC_LARGE: calcFontCss({
    id: "JUNGLE",
    leading: 25,
    size: typeScale.xl,
  }),
}
