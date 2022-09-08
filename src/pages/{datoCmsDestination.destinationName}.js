import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"
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
  Link,
} from "../components/ui"

import * as main from "../components/ui.css"
import * as styles from "../components/category-page.css"

const CategoryTemplate = ({ data }) => {
  console.log(data)
  const {
    destinationName,
    destinationImage,
    description,
    destinationAccommodation,
    destinationActivities,
    destinationInformation,
    destinationClimate,
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
          <Box center paddingY={5}>
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
                <Box paddingY={3}>
                  <Subhead as="h2" color="green">
                    {info.additionalInformationTitle}
                  </Subhead>
                </Box>
                <Box paddingY={2}>
                  <Text as="p">{info.additionalInformationContent}</Text>
                </Box>
              </div>
            )
          })}
          <Box center paddingY={5}>
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
          </Box>

          {/* <Box>
              <Subhead as="h2" color="green">
                {objectData[1].additionalInformationTitle}
              </Subhead>
            </Box>
            <Box>
              <Text as="p">{objectData[1].additionalInformationContent}</Text>
            </Box>
            <Box>
              <Subhead as="h2" color="green">
                {objectData[2].additionalInformationTitle}
              </Subhead>
            </Box>
            <Box>
              <Text as="p">{objectData[2].additionalInformationContent}</Text>
            </Box>
            <Box>
              <Subhead as="h2" color="green">
                {objectData[3].additionalInformationTitle}
              </Subhead>
            </Box>
            <Box>
              <Text as="p">{objectData[3].additionalInformationContent}</Text>
            </Box>
            <Box>
              <Subhead as="h2" color="green">
                {objectData[4].additionalInformationTitle}
              </Subhead>
            </Box>
            <Box>
              <Text as="p">{objectData[4].additionalInformationContent}</Text>
            </Box>
            <Box>
              <Subhead as="h2" color="green">
                {objectData[5].additionalInformationTitle}
              </Subhead>
            </Box>
            <Box>
              <Text as="p">{objectData[5].additionalInformationContent}</Text>
            </Box>
            <Box>
              <Subhead as="h2" color="green">
                {objectData[6].additionalInformationTitle}
              </Subhead>
            </Box>
            <Box>
              <Text as="p">{objectData[6].additionalInformationContent}</Text>
            </Box>
            <Box>
              <Subhead as="h2" color="green">
                {objectData[7].additionalInformationTitle}
              </Subhead>
            </Box>
            <Box>
              <Text as="p">{objectData[7].additionalInformationContent}</Text>
            </Box>
            <Box>
              <Subhead as="h2" color="green">
                {objectData[8].additionalInformationTitle}
              </Subhead>
            </Box>
            <Box>
              <Text as="p">{objectData[8].additionalInformationContent}</Text>
            </Box>
            <Box>
              <Subhead as="h2" color="green">
                {objectData[9].additionalInformationTitle}
              </Subhead>
            </Box>
            <Box>
              <Text as="p">{objectData[9].additionalInformationContent}</Text>
            </Box>
            <Box>
              <Subhead as="h2" color="green">
                {objectData[10].additionalInformationTitle}
              </Subhead>
            </Box>
            <Box>
              <Text as="p">{objectData[10].additionalInformationContent}</Text>
            </Box> */}
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
    }
  }
`

export default CategoryTemplate
