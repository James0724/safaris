import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "../components/category-page.css"
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

const CategoryTemplate = ({ data }) => {
  const { categoryName, categoryImage, categoryDescription } =
    data.datoCmsTourCategoryContent

  return (
    <Layout>
      <div className={styles.heroContainer}>
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
      </div>
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
            <Text as="p">{categoryDescription}</Text>
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
    }
  }
`

export default CategoryTemplate
