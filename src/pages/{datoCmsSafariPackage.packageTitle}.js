import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

import {
  Box,
  Kicker,
  SuperHeading,
  Subhead,
  Underline,
  Text,
  Section,
  Container,
} from "../components/ui"

import * as main from "../components/ui.css"
import * as styles from "../components/packages.css"

const PackageTemplate = ({ data }) => {
  const {
    coverImage,
    gallery,
    numberOfDays,
    packageDescription,
    packageTitle,
    safariPackageInfo,
    specialT,
  } = data.datoCmsSafariPackage
  console.log(safariPackageInfo)

  const image = getImage(coverImage)
  const bgImage = convertToBgImage(image)

  //Getting safari package info data from safari package as an objectData

  const objectData = safariPackageInfo
  const items = Object.assign({}, ...objectData)

  //Sorting out the objectData from title info and activity info to be able to iterate through the activity info
  const arr = []
  for (const infoItem of safariPackageInfo.slice(1)) {
    arr.push(infoItem)
  }

  return (
    <Layout>
      <BackgroundImage {...bgImage} className={main.heroImageWrapper}>
        <div className={main.heroTextWrapper}>
          <SuperHeading color="green" index="1">
            {packageTitle}
          </SuperHeading>
        </div>
      </BackgroundImage>

      <Section>
        <Container>
          <Box center paddingY={5} className="gs_reveal">
            <Kicker>{packageTitle}</Kicker>
            <Subhead as="h2" color="green">
              Breath Taking Destinations
            </Subhead>
            <Subhead as="h1" index="2" color="green">
              About {packageTitle}
            </Subhead>
            <Underline />
            <Text as="p">{packageDescription}</Text>
          </Box>
          <Box center paddingY={3} className="gs_reveal">
            <Subhead as="h2" color="green">
              {items.additionalInformationTitle}
            </Subhead>
            <Text as="p">{items.additionalInformationContent}</Text>
            <Underline />
          </Box>
          {arr.map((itinary, i) => {
            console.log(itinary)
            return (
              <Box className="gs_reveal">
                <Box className={styles.packageItinaryTitleContainer}>
                  <Subhead as="h2" color="green">
                    Day {itinary.dayCount} : {itinary.activityTitle}
                  </Subhead>
                </Box>
                <Box className={styles.packageItinaryTitleContainer}>
                  {itinary.infoCategoryTitle.map((infoItem, i) => {
                    console.log(infoItem)
                    return (
                      <Kicker className={styles.infoItem}>
                        {infoItem.infoTitle} : {infoItem.infoContent}
                      </Kicker>
                    )
                  })}
                </Box>
                <Text as="p">{itinary.activityDetails}</Text>
              </Box>
            )
          })}
        </Container>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query getpackages($packageTitle: String) {
    datoCmsSafariPackage(packageTitle: { eq: $packageTitle }) {
      coverImage {
        alt
        gatsbyImageData(placeholder: BLURRED)
      }
      gallery {
        alt
        gatsbyImageData(placeholder: BLURRED)
      }
      numberOfDays
      packageDescription
      packageTitle
      safariPackageInfo {
        ... on DatoCmsItinerary {
          activityDetails
          activityTitle
          dayCount
          infoCategoryTitle {
            infoTitle
            infoContent
          }
        }
        ... on DatoCmsClimate {
          id
          climateExperience
        }
        ... on DatoCmsAdditionInformation {
          additionalInformationContent
          additionalInformationTitle
        }
      }
      specialType
    }
  }
`

export default PackageTemplate
