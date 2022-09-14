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

const CategoryTemplate = ({ data }) => {
  const {
    destinationName,
    destinationImage,
    description,
    destinationInformation,
    safariPackageItems,
  } = data.datoCmsDestination

  const image = getImage(destinationImage)
  const bgImage = convertToBgImage(image)

  // const objectData = []
  // for (let i = 0; i < destinationInformation.length; i++) {
  //   objectData.push(destinationInformation[i])
  // }

  return (
    <Layout>
      <BackgroundImage {...bgImage} className={main.heroImageWrapper}>
        <div className={main.heroTextWrapper}>
          <SuperHeading color="green" index="1">
            {destinationName}
          </SuperHeading>
        </div>
      </BackgroundImage>

      <Section>
        <Container>
          <Box center paddingY={5} className="gs_reveal">
            <Kicker>{destinationName}</Kicker>
            <Subhead as="h2" color="green">
              Breath Taking Destinations
            </Subhead>
            <Subhead as="h1" index="2" color="green">
              About {destinationName}
            </Subhead>
            <Underline />
            <Text as="p">{description}</Text>
          </Box>

          {destinationInformation.map((info, i) => {
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
            <Kicker>{destinationName}</Kicker>
            <Subhead as="h2" color="green">
              Safari Packages with {destinationName}
            </Subhead>
            <Subhead as="h1" index="2" color="green">
              The Best {destinationName} Safaris
            </Subhead>
            <Underline />
            <Text as="p">
              we offer any Tour combinations you might request, providing you
              with your own custom tours that suits your needs and budget
            </Text>
            <div className={styles.Flexbox}>
              {safariPackageItems.map((destination, i) => {
                const slg = destination.packageTitle
                const slug = slugify(slg, { lower: true })
                return (
                  <Link key={i} to={`/${slug}`} className={styles.FlexboxItem}>
                    <Box padding={3}>
                      <Box paddingY={2}>
                        <div className={styles.gridImageWrapper}>
                          <GatsbyImage
                            alt={destination.coverImage.alt}
                            image={getImage(
                              destination.coverImage.gatsbyImageData
                            )}
                          />
                        </div>
                      </Box>
                      <Box paddingY={3}>
                        <Link to={`/${slug}`} className="link link--dia">
                          {destination.packageTitle}
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
  query getdestinations($destinationName: String) {
    datoCmsDestination(destinationName: { eq: $destinationName }) {
      description
      destinationInformation {
        ... on DatoCmsActivity {
          activitiesIncluded
        }
        ... on DatoCmsAccomodation {
          accommodationDetail
        }
        ... on DatoCmsClimate {
          climateExperience
        }
        ... on DatoCmsAdditionInformation {
          additionalInformationContent
          additionalInformationTitle
          additionalInformationImages {
            alt
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      destinationImage {
        alt
        gatsbyImageData(placeholder: BLURRED)
      }
      destinationName
      safariPackageItems {
        packageTitle
        coverImage {
          alt
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`

export default CategoryTemplate
