import * as React from "react"
import { Twitter, Instagram, Facebook } from "react-feather"

import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { Link } from "./ui"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Heading,
  Kicker,
  Subhead,
  Text,
  UnderlineLight,
  FlexListColumnStart,
  FlexListSpaceBetween,
} from "./ui"

import * as styles from "../components/ui.css"

export default function Footer() {
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

  return (
    <Box as="footer" paddingY={4}>
      <Container>
        <Box>
          <Heading as="h1" index="2" color="green">
            <Kicker color="white">Safaris Tour and Travel</Kicker>
            ENDLESS PLAIN SAFARIS
          </Heading>
          <Subhead as="h2" index="2" color="yellow">
            Endless Discoveries
          </Subhead>
          <UnderlineLight />
        </Box>
        <Box>
          <Flex variant="start" responsive>
            <Box paddingX={4}>
              <GatsbyImage image={image} alt="logo" />
            </Box>
            {/* <Box>
              <FlexList>
                <li>
                  <h3>facebook</h3>
                </li>
                <li>
                  <h3>facebook</h3>
                </li>
              </FlexList>
            </Box> */}
            <Box>
              <FlexListColumnStart>
                <Kicker color="lightyellow">QUICK LINKS</Kicker>
                <li>
                  <Link to="/" class="link link--io">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" class="link link--io">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" class="link link--io">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" class="link link--io">
                    Safari Packages
                  </Link>
                </li>
              </FlexListColumnStart>
            </Box>

            <Box>
              <FlexListColumnStart>
                <Kicker color="lightyellow">CONTACTS</Kicker>
                <li>
                  <h3>email: endlesPlainsafaris@gmail.com</h3>
                </li>
                <li>
                  <h3>phone: +254-724-797-790</h3>
                </li>
                <li>
                  <h3>Nairobi, Kenya</h3>
                </li>
              </FlexListColumnStart>
            </Box>
            <Box>
              <FlexListColumnStart>
                <Kicker color="lightyellow">SOCIAL MEDIA</Kicker>
                <FlexList>
                  <li>
                    <h3>facebook</h3>
                  </li>
                  <li>
                    <h3>facebook</h3>
                  </li>
                </FlexList>
              </FlexListColumnStart>
            </Box>
          </Flex>
        </Box>
        <UnderlineLight />
        <Box paddingY={1}>
          <FlexListSpaceBetween>
            <Box>
              <Text as="p" className="copyright" color="yellow">
                Copyright © rights reserved.
              </Text>
            </Box>
            <Box>
              <FlexList className={styles.footerLinks}>
                <l1>Terms & Conditions</l1> <li>Privacy Policy</li>
                <li>Covid-19 & Booking Flexibility</li>
              </FlexList>
            </Box>
          </FlexListSpaceBetween>
        </Box>
      </Container>
    </Box>
  )
}
