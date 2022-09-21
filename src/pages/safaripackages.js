import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import slugify from "slugify"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../components/category-page.css"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import * as main from "../components/ui.css"

import {
  Box,
  SuperHeading,
  Link,
  Section,
  Container,
  Kicker,
  Subhead,
  Underline,
  Text,
} from "../components/ui"

export default function SafarisPage() {
  const results = useStaticQuery(graphql`
    {
      allDatoCmsSafariPackage {
        nodes {
          packageDescription
          coverImage {
            alt
            gatsbyImageData(placeholder: BLURRED)
          }
          isFeatured
          packageTitle
        }
      }
      allDatoCmsSafariPackageBackground {
        nodes {
          safariBackgroundImage {
            alt
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `)
  const data = results.allDatoCmsSafariPackage.nodes
  const imagedata = results.allDatoCmsSafariPackageBackground.nodes
  const imageItem = Object.assign({}, ...imagedata)

  const imagemain = getImage(imageItem.safariBackgroundImage)
  const bgImagemain = convertToBgImage(imagemain)

  return (
    <Layout>
      <BackgroundImage {...bgImagemain} className={main.heroImageWrapper}>
        <div className={main.heroTextWrapper}>
          <SuperHeading color="green" index="1">
            Endless Safaris Packages
          </SuperHeading>
        </div>
      </BackgroundImage>
      <Section>
        <Container>
          <Box className="gs_reveal" center>
            <Kicker>Best Safari Packages</Kicker>
            <Subhead as="h2" color="green">
              Breath Taking Destinations
            </Subhead>
            <Subhead as="h1" index="2" color="green">
              Explore the Endless
            </Subhead>
            <Underline />
            <Text as="p">
              we offer any Tour combinations you might request, providing you
              with your own custom tours that suits your needs and budget
            </Text>
          </Box>
          <Box paddingY={5} className="gs_reveal">
            <div className={styles.Flexbox}>
              {data.map((item, i) => {
                const slg = item.packageTitle
                const slug = slugify(slg, { lower: true })
                return (
                  <Link key={i} to={`/${slug}`} className={styles.FlexboxItem}>
                    <Box padding={2}>
                      <div className={styles.gridImageWrapper}>
                        <GatsbyImage
                          alt={item.coverImage.alt}
                          image={getImage(item.coverImage)}
                        />
                      </div>
                      <Box paddingY={3}>
                        <Link to={`/${slug}`} className="link link--dia">
                          {item.packageTitle}
                        </Link>
                      </Box>
                    </Box>
                  </Link>
                )
              })}
            </div>
          </Box>
        </Container>
      </Section>
      {/* <Flex gap={4} variant="responsive" marginY="0">
        <Box padding="0" paddingY="0" height="thirdscreen">
          <Heading as="h1" index="2" color="green">
            <Kicker color="white">Safaris Tour and Travel</Kicker>
            ENDLESS PLAIN SAFARIS
          </Heading>
          <Subhead as="h2" index="2" color="yellow">
            Endless Discoveries
          </Subhead>
        </Box>
      </Flex> */}
    </Layout>
  )
}
