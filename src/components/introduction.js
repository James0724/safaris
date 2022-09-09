import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

import {
  Container,
  Box,
  Kicker,
  Text,
  Subhead,
  Paragraph,
  Flex,
  Underline,
  Link,
  Section,
} from "./ui"

export default function FeatureList() {
  const results = useStaticQuery(graphql`
    {
      datoCmsIntroImage {
        introHeroImage {
          gatsbyImageData
        }
      }
    }
  `)
  const data = results.datoCmsIntroImage.introHeroImage
  const image = getImage(data)
  const bgImage = convertToBgImage(image)

  return (
    <Section>
      <Container className="gs_reveal">
        <Box center paddingY={5}>
          <Subhead as="h2" index="2" color="green">
            Jambo
          </Subhead>
          <Subhead as="h1" index="2" color="green">
            KARIBU NYUMBANI
          </Subhead>
          <Paragraph as="p">
            This simply means "Hi welcome home" and indeed it feels like home
            with us
          </Paragraph>
        </Box>
        <Flex gap={4} variant="responsive">
          <Box width="half">
            <BackgroundImage {...bgImage}>
              <GatsbyImage image={image} alt={"Antelopes"} />
            </BackgroundImage>
          </Box>
          <Box width="half">
            <Kicker>MAGICAL SAFARIS</Kicker>
            <Subhead as="h1" color="green">
              UNFORGETABLE EXPERIENCE
            </Subhead>
            <Kicker>QUICK INTRO</Kicker>
            <Underline />
            <Text as="p">
              We are a dynamic, proudly Kenya and Tanzania safari company. we
              have professional licenced guides speaking five languages English,
              Italian, Spanish, French and Swahili. for the past 5 years we have
              been leading safari tours on behalf of reputable tour companies.
              Throught our work we uphold environmental princriples and we aim
              to help our community. We are at your service to make your dream
              vacation a reality the way you want it to be with high quality
              profesional services delivered by experienced, knowledgeable and
              freindly staff.
            </Text>

            <Link to="/about" className="link link--dia">
              More About Us
            </Link>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}
