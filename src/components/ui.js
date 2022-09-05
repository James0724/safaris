import { Link as GatsbyLink } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import isAbsoluteURL from "is-absolute-url"
import React from "react"
import * as styles from "./ui.css"
import * as menustyles from "./menu.css"

export const cx = (...args) => args.filter(Boolean).join(" ")

export function Base({
  as: Component = "div",
  cx: _cx = [],
  className,
  ...props
}) {
  return <Component className={cx(..._cx, className)} {...props} />
}

export function VideoBase({
  as: Component = "video",
  cx: _cx = [],
  className,
  ...props
}) {
  return <Component className={cx(..._cx, className)} {...props} />
}

export function Container({ width = "normal", ...props }) {
  return <Base cx={[styles.containers[width]]} {...props} />
}

export function Flex({
  variant,
  gap = 3,
  gutter,
  wrap,
  responsive,
  marginY,
  height,
  alignItems,
  cx: _cx = [],
  ...props
}) {
  return (
    <Base
      cx={[
        styles.flex,
        height && styles.heights[height],
        variant && styles.flexVariants[variant],
        responsive && styles.flexVariants.responsive,
        wrap && styles.flexVariants.wrap,
        gutter && styles.gutter[gutter],
        gutter ? styles.flexGap[0] : styles.flexGap[gap],
        marginY && styles.marginY[marginY],
        alignItems && styles.flexVariants[alignItems],
        ..._cx,
      ]}
      {...props}
    />
  )
}

export function Grid({ cx: _cx = [], ...props }) {
  return <Base cx={[styles.grid, ..._cx]} {...props} />
}

export function Box({
  width = "full",
  background,
  padding,
  paddingY,
  radius,
  height,
  center = false,
  order,
  cx: _cx = [],
  ...props
}) {
  return (
    <Base
      cx={[
        styles.widths[width],
        height && styles.heights[height],
        background && styles.backgrounds[background],
        padding && styles.padding[padding],
        paddingY && styles.paddingY[paddingY],
        radius && styles.radii[radius],
        center && styles.box.center,
        order && styles.order[order],
        ..._cx,
      ]}
      {...props}
    />
  )
}

export function Underline({ width = "full", cx: _cx = [], ...props }) {
  return <Base cx={[styles.underline, ..._cx]} {...props} />
}

export function UnderlineLight({ width = "full", cx: _cx = [], ...props }) {
  return <Base cx={[styles.underlineLight, ..._cx]} {...props} />
}

export function VideoWrapper({
  width = "full",
  height,
  center = true,
  cx: _cx = [],
  ...props
}) {
  return (
    <Base
      cx={[
        styles.heights[height],
        styles.widths[width],
        styles.videoWrapper,
        styles.box.center,
        ..._cx,
      ]}
      {...props}
    />
  )
}

export function VideoBackground({ cx: _cx = [], ...props }) {
  return <VideoBase cx={[styles.video]} {...props} />
}
// export function HeroImage({ height = "thirdscreen", cx: _cx = [], ...props }) {
//   return (
//     <Base
//       cx={[styles.imageWrapper, height && styles.heights[height], ..._cx]}
//       {...props}
//     />
//   )
// }

export function FlexList(props) {
  return <Flex as="ul" cx={[styles.list]} {...props} />
}

export function FlexListColumnStart(props) {
  return (
    <Flex
      as="ul"
      cx={[styles.list, styles.flexVariants.columnStart]}
      {...props}
    />
  )
}
export function FlexListSpaceBetween(props) {
  return (
    <Flex
      as="ul"
      cx={[styles.list, styles.flex, styles.flexVariants.spaceBetween]}
      {...props}
    />
  )
}

export function List(props) {
  return <Base as="ul" cx={[styles.list]} {...props} />
}

export function Space({ size = "auto", ...props }) {
  return <Base cx={[styles.margin[size]]} {...props} />
}

export function Nudge({ left, right, top, bottom, ...props }) {
  return (
    <Base
      cx={[
        left && styles.marginLeft[-left],
        right && styles.marginRight[-right],
        top && styles.marginTop[-top],
        bottom && styles.marginBottom[-bottom],
      ]}
      {...props}
    />
  )
}

export function Section(props) {
  return <Box as="section" className={styles.section} {...props} />
}

export function Text({
  variant = "body",
  center = false,
  bold = false,
  color,
  index = "0",
  ...props
}) {
  return (
    <Base
      cx={[
        color && styles.colorsVariants[color],
        styles.text[variant],
        center && styles.text.center,
        bold && styles.text.bold,
        index && styles.index[index],
      ]}
      {...props}
    />
  )
}

export function SuperHeading({ ...props }) {
  return <Text as="h1" variant="superHeading" {...props} />
}

export function Heading({ ...props }) {
  return <Text as="h2" variant="heading" {...props} />
}

export function Subhead({ ...props }) {
  return <Text as="h3" variant="subhead" {...props} />
}

export function Kicker({ ...props }) {
  return <Text variant="kicker" {...props} />
}
export function Paragraph({ ...props }) {
  return <Text variant="medium" {...props} />
}

export function Link({ to, href, ...props }) {
  const url = href || to || ""
  if (isAbsoluteURL(url)) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a href={url} className={styles.link} {...props} />
    )
  }
  return <GatsbyLink to={url} className={styles.link} {...props} />
}

export function NavLink({ ...props }) {
  return <Base as={Link} cx={[styles.navlink]} {...props} />
}

export function NavButtonLink({ ...props }) {
  return <Base as="button" cx={[styles.navButtonlink]} {...props} />
}

export function Button({ variant = "primary", ...props }) {
  return <Base as={Link} cx={[styles.buttons[variant]]} {...props} />
}

export function ButtonList({ links = [], reversed = false, ...props }) {
  const getVariant = i => {
    if (reversed) {
      return i === 0 ? "reversed" : "linkReversed"
    }
    return i === 0 ? "primary" : "link"
  }
  return (
    <FlexList marginY={4} {...props}>
      {links &&
        links.map((link, i) => (
          <li key={link.id}>
            <Button href={link.href} variant={getVariant(i)}>
              {link.text}
            </Button>
          </li>
        ))}
    </FlexList>
  )
}

export function CTALink(props) {
  return <Base as={Link} cx={[styles.ctaLink]} {...props} />
}

export function LinkList({ links = [], ...props }) {
  return (
    <FlexList {...props}>
      {links &&
        links.map((link, i) => (
          <li key={link.id}>
            <CTALink href={link.href}>{link.text}</CTALink>
          </li>
        ))}
    </FlexList>
  )
}

export function Blockquote(props) {
  return <Base as="blockquote" cx={[styles.blockquote]} {...props} />
}

export function Avatar({ alt, image }) {
  return (
    <GatsbyImage alt={alt} image={getImage(image)} className={styles.avatar} />
  )
}

export function Logo({ alt, image, size = "small" }) {
  return (
    <GatsbyImage
      alt={alt}
      image={getImage(image)}
      className={styles.logos[size]}
    />
  )
}

export function Icon({ alt, image, size = "medium" }) {
  return (
    <GatsbyImage
      alt={alt}
      image={getImage(image)}
      className={styles.icons[size]}
    />
  )
}

export function IconLink(props) {
  return <NavLink cx={[styles.iconLink]} {...props} />
}

export function InteractiveIcon(props) {
  return <Base as="button" cx={[styles.interactiveIcon]} {...props} />
}

export function VisuallyHidden(props) {
  return <Base as="span" cx={[styles.visuallyHidden]} {...props} />
}

export function BlockLink(props) {
  return <Link className={styles.blockLink} {...props} />
}

//**********************MENU STYLING *******************************//

export function HeaderContainer({
  as: Component = "header",
  cx: _cx = [],
  className,
  ...props
}) {
  return <Component className={cx(..._cx, className)} {...props} />
}

export function MenuButton({ cx: _cx = [], ...props }) {
  return <Base cx={[menustyles.menuButton, ..._cx]} {...props} />
}
export function Navheader({ cx: _cx = [], ...props }) {
  return <Base cx={[menustyles.navbarHeader, ..._cx]} {...props} />
}
export function MenuContainer({ cx: _cx = [], ...props }) {
  return <Base cx={[menustyles.menuContainer, ..._cx]} {...props} />
}
export function SecondaryBackground({ cx: _cx = [], ...props }) {
  return <Base cx={[menustyles.menuSecondaryBackground, ..._cx]} {...props} />
}
export function MenuLayer({ cx: _cx = [], ...props }) {
  return <Base cx={[menustyles.menuLayer, ..._cx]} {...props} />
}
export function MenuCityBackground({ cx: _cx = [], ...props }) {
  return <Base cx={[menustyles.menuCityBackground, ..._cx]} {...props} />
}
