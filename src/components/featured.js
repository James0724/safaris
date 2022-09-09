import React from "react"
//import { graphql } from "gatsby"
//import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Box, Kicker, Text, Subhead, Underline, Section } from "./ui"

export default function FeatureList() {
  return (
    <Section>
      <Container>
        <Box center paddingY={5}>
          <Kicker>EXPERIENCE THE BEST</Kicker>
          <Subhead as="h2" color="green">
            Featured Safaris
          </Subhead>
          <Subhead as="h1" index="2" color="green">
            Our Top Destinations
          </Subhead>
          <Underline />
          <Text as="p">
            Below include our most popular Safaris but we also offer any Tour
            combinations you might request, providing you with your own custom
            tours that suits your needs and budget
          </Text>
        </Box>
        <Box>
          {/* {categories.map((category, i) => {
            return (
              <div key={i}>
                <Box>
                  <GatsbyImage
                    alt={props.image.alt}
                    image={getImage(props.image.gatsbyImageData)}
                  />
                </Box>
                <Box>
                  <Subhead>{category.name}</Subhead>
                </Box>
              </div>
            )
          })} */}
        </Box>
      </Container>
    </Section>
  )
}

// export const query = graphql`
//   Categories {
//   safariCategory {
//     tourCategories {
//       categoryName
//       id
//       image {
//         responsiveImage {
//           src
//         }
//       }
//     }
//   }
// }
// `
