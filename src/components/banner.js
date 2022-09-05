import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

import {
  Box,
  Container,
  Flex,
  Section,
  Subhead,
  Text,
  Underline,
  Link,
} from "./ui"

export default function Ad() {
  const results = useStaticQuery(graphql`
    {
      datoCmsAdImage {
        adHeroImage {
          gatsbyImageData
          alt
        }
      }
    }
  `)

  const data = results.datoCmsAdImage.adHeroImage
  const image = getImage(data)
  const bgImage = convertToBgImage(image)

  return (
    <Section>
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half">
            <Subhead as="h2" index="2" color="green">
              Made To Measure
            </Subhead>
            <Subhead as="h1" index="2" color="skyblue">
              Dare to Explore the Endless
            </Subhead>
            <Underline />
            <Text as="p">
              We open up a world of wonders and create magical memories that
              will stay with you far beyond your travels. Whatever your travel
              preference may be, whether you are looking for a cultural city
              break, a child friendly family holiday, unlimited adventure, a
              romantic getaway or just to escape and uncover, we are here to
              create a seamless experience while handcrafting your bespoke
              journey.
            </Text>
            <Link>EXPLORE</Link>
          </Box>
          <Box width="half">
            <BackgroundImage {...bgImage}>
              <GatsbyImage image={image} alt={"dare to explore"} />
            </BackgroundImage>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}
