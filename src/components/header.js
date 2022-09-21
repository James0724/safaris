import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

import Navigation from "./navbar"
import * as styles from "./menu.css"
import { Flex } from "./ui"

const Header = () => {
  const results = useStaticQuery(graphql`
    {
      datoCmsLogoItem {
        logoImage {
          gatsbyImageData
        }
      }
    }
  `)

  const data = results.datoCmsLogoItem.logoImage
  const image = getImage(data)
  const bgImage = convertToBgImage(image)

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
    scrollvertical: true,
  })

  const [disabled, setDisabled] = useState(false)

  const handleMenu = () => {
    disableMenu()
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
        scrollvertical: false,
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
        scrollvertical: true,
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
        scrollvertical: false,
      })
    }
  }

  const handleCloseMenu = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
        scrollvertical: false,
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
        scrollvertical: true,
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
        scrollvertical: false,
      })
    }
  }

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  return (
    <div className={styles.navbarHeader}>
      <div className={styles.navbarHeaderNav}>
        <Flex variant="spaceBetween">
          <Link to="/" className={styles.logoLink}>
            <BackgroundImage {...bgImage}>
              <GatsbyImage image={image} alt={"logo"} />
            </BackgroundImage>
          </Link>

          <button
            disabled={disabled}
            onClick={handleMenu}
            className={styles.menuButton}
          >
            <h1 style={{ color: "#867d2c" }}>{state.menuName}</h1>
          </button>
        </Flex>
      </div>

      <Navigation state={state} closeMenu={handleCloseMenu} />
    </div>
  )
}

export default Header
