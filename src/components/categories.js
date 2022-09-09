import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
import { Link } from "gatsby"
import { Container, Box, Kicker, Text, Subhead, Underline, Section } from "./ui"

import * as styles from "../components/category-page.css"

export default function FeatureList() {
  const results = useStaticQuery(graphql`
    {
      allDatoCmsTourCategory {
        nodes {
          categoryImage {
            gatsbyImageData(placeholder: BLURRED)
          }
          categoryName
        }
      }
    }
  `)
  const data = results.allDatoCmsTourCategory.nodes
  return (
    <Section>
      <Container>
        <Box center paddingY={5} className="gs_reveal">
          <Kicker>FIND WHAT YOU LIKE</Kicker>
          <Subhead as="h2" color="green">
            Tour Categories
          </Subhead>
          <Subhead as="h1" color="green">
            Popular Safaris by category
          </Subhead>
          <Underline />
          <Text as="p">
            Below include our most popular Safaris but we also offer any Tour
            combinations you might request, providing you with your own custom
            tours that suits your needs and budget
          </Text>
        </Box>
        <Box className="gs_reveal">
          <div className={styles.Flexbox}>
            {data.map((item, i) => {
              const slg = item.categoryName
              const slug = slugify(slg, { lower: true })
              return (
                <Link key={i} to={`/${slug}`} className={styles.FlexboxItem}>
                  <Box padding={2}>
                    <div className={styles.gridImageWrapper}>
                      <GatsbyImage
                        alt={item.categoryImage.alt}
                        image={getImage(item.categoryImage)}
                      />
                    </div>
                    <Box paddingY={3}>
                      <Link to={`/${slug}`} className="link link--dia">
                        {item.categoryName}
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
  )
}
