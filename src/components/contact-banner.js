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

export default function Hero() {
  const results = useStaticQuery(graphql`
    {
      datoCmsContactImage {
        contactHeroImage {
          gatsbyImageData
        }
      }
    }
  `)

  const data = results.datoCmsContactImage.contactHeroImage
  const image = getImage(data)
  const bgImage = convertToBgImage(image)

  return (
    <Section>
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half">
            <BackgroundImage Tag="section" {...bgImage}>
              <div>
                <GatsbyImage image={image} alt={"dare to explore"} />
              </div>
            </BackgroundImage>
          </Box>
          <Box width="half">
            <Subhead as="h2" index="2" color="green">
              Your Journey Starts Here
            </Subhead>
            <Subhead as="h1" index="2" color="green">
              Leave the planning to us
            </Subhead>
            <Underline />
            <Text as="p">
              Please e-mail us for further details We enable you to explore with
              purpose, enthusiasm, and a new-found appreciation for the art of
              travel. Experience diverse cultures; immerse yourself in authentic
              experiences; take back the moment and reconnect with a joyous
              attitude towards life. We do not pad our tours with extra 1st day
              “Welcome” and last day “Goodbye”. A true 1 day tour should not be
              advertised as 3 days!
            </Text>
            <Link to="/contact" className="link link--dia">
              Contact Us
            </Link>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}
