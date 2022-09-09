import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import { getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

import {
  Container,
  Section,
  Text,
  SuperHeading,
  Box,
  Kicker,
  Subhead,
  Underline,
} from "./ui"

import * as main from "./ui.css"
import * as styles from "./about-hero.css"

export default function AboutHero() {
  const results = useStaticQuery(graphql`
    {
      datoCmsAboutImage {
        aboutHeroImage {
          alt
          gatsbyImageData
        }
      }
    }
  `)

  const data = results.datoCmsAboutImage.aboutHeroImage
  const image = getImage(data)
  const bgImage = convertToBgImage(image)
  return (
    <>
      <BackgroundImage
        Tag="section"
        {...bgImage}
        className={main.heroImageWrapper}
      >
        <div className={main.heroTextWrapper}>
          <SuperHeading color="green" index="1">
            About Endless Plain Safaris
          </SuperHeading>
        </div>
      </BackgroundImage>
      <Section>
        <Container>
          <Box center>
            <Text className={styles.aboutHeroText}>
              We’re serious about creating amazing products, practices, open
              work, accessibility, and inclusivity. And in all that we strive to
              embed a good amount of fun. We’re rooted in the open source
              community and deeply care about giving back.
            </Text>
          </Box>
          <Box center paddingY={5}>
            <Kicker>Our Features</Kicker>
            <Subhead as="h2" color="green">
              About our services
            </Subhead>
            <Subhead as="h1" index="2" color="green">
              Why choose us
            </Subhead>
            <Underline />
            <Text as="p">
              Below include our most popular Safaris but we also offer any Tour
              combinations you might request, providing you with your own custom
              tours that suits your needs and budget
            </Text>
          </Box>
          <Box center paddingY={5}>
            <Kicker>WHY ENDLESS PLAIN SAFARIS IS THE BEST</Kicker>
            <Subhead as="h2" color="green">
              We are Experienced
            </Subhead>
            <Subhead as="h1" index="2" color="green">
              Meet Our Team
            </Subhead>
            <Underline />
            <Text as="p">
              Our team of highly experienced travel designers will guide you
              from beginning to end as you embark on a tailor-made journey of
              distinction, enjoying truly exclusive and authentic cultural
              experiences. We can fulfil your bucket-list dreams.
            </Text>
          </Box>
          {/* <Box center>
            <Heading color="green">
              Our Company culture comes in many shapes and forms, but we
              particularly pride ourselves on:
            </Heading>
          </Box> */}
        </Container>
      </Section>
    </>
  )
}
