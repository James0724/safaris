import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import slugify from "slugify"

import {
  Box,
  Kicker,
  SuperHeading,
  Subhead,
  Underline,
  Text,
  Section,
  Container,
  Link,
} from "../components/ui"

import * as main from "../components/ui.css"
import * as styles from "../components/category-page.css"

const PageTemplate = ({ data }) => {
  const { destinations, pageImage, pageInfo, pageTitle } = data.datoCmsMainPage

  const image = getImage(pageImage)
  const bgImage = convertToBgImage(image)

  return (
    <Layout>
      <BackgroundImage {...bgImage} className={main.heroImageWrapper}>
        <div className={main.heroTextWrapper}>
          <SuperHeading color="green" index="1">
            {pageTitle}
          </SuperHeading>
        </div>
      </BackgroundImage>

      <Section>
        <Container>
          <Box center paddingY={5} className="gs_reveal">
            <Kicker>{pageTitle}</Kicker>
            <Subhead as="h1" index="2" color="green">
              {pageTitle} INSPIRATION
            </Subhead>
            <Underline />
          </Box>

          {pageInfo.map((info, i) => {
            console.log(info)
            return (
              <div key={i}>
                <Box paddingY={3} className="gs_reveal">
                  <Subhead as="h2" color="green">
                    {info.additionalInformationTitle}
                  </Subhead>
                </Box>
                <Box paddingY={2} className="gs_reveal">
                  <Text as="p">{info.additionalInformationContent}</Text>
                </Box>
                <Box className="gs_reveal">
                  <div className={styles.Flexbox}>
                    {info.additionalInformationImages.map((imageinfo, i) => {
                      return (
                        <div className={styles.FlexboxItem}>
                          <Box padding={2}>
                            <div className={styles.infoImageWrapper}>
                              <GatsbyImage
                                alt={imageinfo.alt}
                                image={getImage(imageinfo)}
                              />
                            </div>
                          </Box>
                        </div>
                      )
                    })}
                  </div>
                </Box>
              </div>
            )
          })}
          <Box center paddingY={5} className="gs_reveal">
            <Box center paddingY={5} className="gs_reveal">
              <Kicker>{pageTitle} Destinations</Kicker>
              <Subhead as="h2" color="green">
                Breath Taking Destinations
              </Subhead>
              <Subhead as="h1" index="2" color="green">
                {pageTitle} Highlights
              </Subhead>
              <Underline />
            </Box>
            <Text as="p">
              we offer any Tour combinations you might request, providing you
              with your own custom tours that suits your needs and budget
            </Text>
            <div className={styles.Flexbox}>
              {destinations.map((destination, i) => {
                const slg = destination.destinationName
                const slug = slugify(slg, { lower: true })
                return (
                  <Link key={i} to={`/${slug}`} className={styles.FlexboxItem}>
                    <Box padding={3}>
                      <Box paddingY={2}>
                        <div className={styles.gridImageWrapper}>
                          <GatsbyImage
                            alt={destination.destinationImage.alt}
                            image={getImage(
                              destination.destinationImage.gatsbyImageData
                            )}
                          />
                        </div>
                      </Box>
                      <Box paddingY={3}>
                        <Link to={`/${slug}`} className="link link--dia">
                          {destination.destinationName}
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
    </Layout>
  )
}

export const query = graphql`
  query getPage($pageTitle: String) {
    datoCmsMainPage(pageTitle: { eq: $pageTitle }) {
      destinations {
        destinationName
        destinationImage {
          alt
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      pageImage {
        alt
        gatsbyImageData(placeholder: BLURRED)
      }
      pageInfo {
        additionalInformationContent
        additionalInformationTitle
        additionalInformationImages {
          alt
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      pageTitle
    }
  }
`

export default PageTemplate
