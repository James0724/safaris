import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { Link } from "gatsby"
import * as styles from "./menu.css"

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose,
} from "./animations"

import { Box, Flex, Subhead, Text } from "./ui"

const cities = [
  {
    name: "Game Parks",
    image: "https://www.datocms-assets.com/79325/1662066414-parks.jpg",
    slug: "game-parks-safaris",
  },
  {
    name: "Lake Parks",
    image: "https://www.datocms-assets.com/79325/1662093495-nakuru.jpg",
    slug: "lake-game-parks-safaris",
  },
  {
    name: "City Excursions",
    image: "https://www.datocms-assets.com/79325/1662093669-nairobi.jpg",
    slug: "city-excursions",
  },
  {
    name: "Mountain",
    image: "https://www.datocms-assets.com/79325/1662093429-mountain.jpg",
    slug: "mountain-climbing-safaris",
  },
  {
    name: "Culture",
    image: "https://www.datocms-assets.com/79325/1662093579-culture.jpg",
    slug: "cultural-safaris",
  },
  {
    name: "Marine",
    image: "https://www.datocms-assets.com/79325/1662093353-marine.jpg",
    slug: "marine-parks-safaris",
  },
]

const Navigation = ({ state, handleClick }) => {
  let menuLayer = useRef(null)
  let reveal1 = useRef(null)
  let reveal2 = useRef(null)
  let cityBackground = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  let info = useRef(null)

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.
      staggerRevealClose(reveal2, reveal1)

      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } })
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block

      gsap.to(menuLayer, { duration: 0, css: { display: "block" } })
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      })
      staggerReveal(reveal1, reveal2)
      fadeInUp(info)
      staggerText(line1, line2, line3)
    }
  }, [state])

  return (
    <div className={styles.menuContainer} ref={el => (menuLayer = el)}>
      <div
        className={styles.menuSecondaryBackground}
        ref={el => (reveal1 = el)}
      ></div>
      <div className={styles.menuLayerWrapper}>
        <div className={styles.menuLayer} ref={el => (reveal2 = el)}>
          <div
            className={styles.menuCityBackground}
            ref={el => (cityBackground = el)}
          ></div>

          <Flex>
            <Box center width="half" paddingY={5}>
              <ul className={styles.menuLinklist}>
                <li className={styles.menuLinklistItem}>
                  <Link
                    onMouseEnter={e => handleHover(e)}
                    onBlur=""
                    onMouseOut={e => handleHoverExit(e)}
                    ref={el => (line1 = el)}
                    to="/"
                    className={styles.menuLinkItem}
                    onClick={handleClick}
                  >
                    <h1>Home</h1>
                  </Link>
                </li>
                <li className={styles.menuLinklistItem}>
                  <Link
                    className={styles.menuLinkItem}
                    onMouseEnter={e => handleHover(e)}
                    onBlur=""
                    onMouseOut={e => handleHoverExit(e)}
                    ref={el => (line2 = el)}
                    to="/about"
                    onClick={handleClick}
                  >
                    <h1>About Us</h1>
                  </Link>
                </li>
                <li className={styles.menuLinklistItem}>
                  <Link
                    className={styles.menuLinkItem}
                    onMouseEnter={e => handleHover(e)}
                    onMouseOut={e => handleHoverExit(e)}
                    onBlur=""
                    ref={el => (line3 = el)}
                    to="/contact"
                    onClick={handleClick}
                  >
                    <h1>Contact</h1>
                  </Link>
                </li>
              </ul>
            </Box>
            <Box width="half" padding={3}>
              <div ref={el => (info = el)}>
                <Subhead as="h2" color="green">
                  Our Promise
                </Subhead>
              </div>
              <Text as="p" color="green">
                In travel things can change unexpectedly and we promise from
                start to finish we will be with you the entire way to help
                shedule, reschedule and accomodate for changes. We are prepared
                to help our travellers have the safest and most rewarding safari
                possible.
              </Text>
            </Box>
          </Flex>
          <Box>
            <Box center>
              <div className={styles.cities}>
                <div className={styles.location}>Safari Tours Category:</div>

                {cities.map(el => (
                  <Link
                    to={`/${el.slug}`}
                    className={styles.span}
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}
                  >
                    <span>{el.name}</span>
                  </Link>
                ))}
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Navigation
