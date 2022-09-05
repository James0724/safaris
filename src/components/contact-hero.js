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
  Heading,
  Flex,
} from "./ui"
import * as main from "./ui.css"

export default function AboutHero() {
  const results = useStaticQuery(graphql`
    {
      datoCmsContactImage {
        contactHeroImage {
          gatsbyImageData
        }
      }
    }
  `)

  const data = results.datoCmsContactImage.contactHeroImage
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
            Contact Us
          </SuperHeading>
        </div>
      </BackgroundImage>

      <Section>
        <Container>
          <Box center>
            <Text>
              Use the form below to drop us an e-mail. Old fashioned phone calls
              work too.
            </Text>
          </Box>
          <Box center paddingY={5}>
            <Kicker>PLAN YOUR JOURNEY WITH US</Kicker>
            <Subhead as="h2" color="green">
              We would like to here from you
            </Subhead>
            <Subhead as="h1" index="2" color="green">
              Your journey starts here
            </Subhead>
            <Underline />
            <Text as="p">
              We'd love to hear from you. Simply fill in the form below or reach
              out directly to one of the departments listed below.
            </Text>
          </Box>
          <Flex>
            <Box width="half">
              <Subhead as="h2" color="green">
                Email: sales@endlessplainsafaris.com
              </Subhead>
              <Subhead as="h2" color="green">
                Phone: +254-724-797-790
              </Subhead>
              <Subhead as="h2" color="green">
                Nairobi, Kenya
              </Subhead>
            </Box>
            <Box width="half">
              <form
                method="post"
                id="contactForm"
                name="contactForm"
                novalidate="novalidate"
              >
                <Flex>
                  <Box width="half">
                    <input
                      type="text"
                      className="form-control"
                      name="fname"
                      id="fname"
                      placeholder="First name"
                    />
                  </Box>
                  <Box width="half">
                    <input
                      type="text"
                      className="form-control"
                      name="lname"
                      id="lname"
                      placeholder="Last name"
                    />
                  </Box>
                </Flex>
                <Flex>
                  <Box>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </Box>
                </Flex>
                <Flex>
                  <Box>
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      cols="30"
                      rows="7"
                      placeholder="Write your message"
                    ></textarea>
                  </Box>
                </Flex>
              </form>
            </Box>
          </Flex>
          <Box center paddingY={5}>
            <Heading color="green">What our Clients Say:</Heading>
          </Box>
        </Container>
      </Section>
    </>
  )
}
