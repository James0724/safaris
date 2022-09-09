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
  const { categoryName, categoryImage, categoryDescription, destinationList } =
    data.datoCmsTourCategoryContent

  const image = getImage(categoryImage)
  const bgImage = convertToBgImage(image)

  return (
    <Layout>
      {/* <div className={styles.heroContainer}>
        <div className={styles.categoryHeading}>
          <SuperHeading as="h1" color="green" index="1">
            {categoryName}
          </SuperHeading>
        </div>
        <div className={styles.backgroundImage}>
          <GatsbyImage
            alt={categoryImage.alt}
            image={getImage(categoryImage.gatsbyImageData)}
          />
        </div>
      </div> */}

      <BackgroundImage
        Tag="section"
        {...bgImage}
        className={main.heroImageWrapper}
      >
        <div className={main.heroTextWrapper}>
          <SuperHeading color="green" index="1">
            {categoryName}
          </SuperHeading>
        </div>
      </BackgroundImage>

      <Section>
        <Container>
          <Box center paddingY={5}>
            <Kicker>{categoryName}</Kicker>
            <Subhead as="h2" color="green">
              Breath Taking Destinations
            </Subhead>
            <Subhead as="h1" index="2" color="green">
              About {categoryName}
            </Subhead>
            <Underline />
            <Text as="p">
              {categoryDescription} Below are our most popular Safaris in this
              category per parks and location, but we also offer any National
              Park Safari or Cultural Tour combinations you might request,
              providing you with your own custom tours that suits your needs and
              budget. Please e-mail us for further details or leave your request
              in the contact form in <Link to="/contact">contact page.</Link>
            </Text>
          </Box>
          <Box>
            <Subhead as="h2" color="green">
              Poplular Destinations in {categoryName}
            </Subhead>
            <Underline />
            <div className={styles.Flexbox}>
              {destinationList.map((destination, i) => {
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
  query getcategory($categoryName: String) {
    datoCmsTourCategoryContent(categoryName: { eq: $categoryName }) {
      categoryName
      categoryDescription
      categoryImage {
        gatsbyImageData(placeholder: BLURRED)
        alt
      }
      destinationList {
        destinationImage {
          alt
          gatsbyImageData
        }
        destinationName
      }
    }
  }
`

export default CategoryTemplate
