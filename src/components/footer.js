import * as React from "react"
import { Twitter, Instagram, Facebook } from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Heading,
  Kicker,
  Subhead,
  Text,
  UnderlineLight,
  FlexListColumnStart,
  FlexListSpaceBetween,
} from "./ui"

export default function Footer() {
  return (
    <Box as="footer" paddingY={4}>
      <Container>
        <Box>
          <Heading as="h1" index="2" color="green">
            <Kicker color="white">Safaris Tour and Travel</Kicker>
            ENDLESS PLAIN SAFARIS
          </Heading>
          <Subhead as="h2" index="2" color="yellow">
            Endless Discoveries
          </Subhead>
          <UnderlineLight />
        </Box>
        <Box paddingY={4}>
          <Flex variant="start" responsive>
            <Box>
              <FlexList>
                <li>
                  <h3>facebook</h3>
                </li>
                <li>
                  <h3>facebook</h3>
                </li>
              </FlexList>
            </Box>
            <Box>
              <FlexListColumnStart>
                <Kicker color="lightyellow">QUICK LINKS</Kicker>
                <li>
                  <h3>HOME</h3>
                </li>
                <li>
                  <h3>ABOUT</h3>
                </li>
                <li>
                  <h3>CONTACTS</h3>
                </li>
                <li>
                  <h3>SAFARI PACKAGES</h3>
                </li>
              </FlexListColumnStart>
            </Box>

            <Box>
              <FlexListColumnStart>
                <Kicker color="lightyellow">CONTACTS</Kicker>
                <li>
                  <h3>email: endlesPlainsafaris@gmail.com</h3>
                </li>
                <li>
                  <h3>phone: +254-724-797-790</h3>
                </li>
                <li>
                  <h3>Nairobi, Kenya</h3>
                </li>
              </FlexListColumnStart>
            </Box>
            <Box>
              <FlexListColumnStart>
                <Kicker color="lightyellow">SOCIAL MEDIA</Kicker>
                <FlexList>
                  <li>
                    <h3>facebook</h3>
                  </li>
                  <li>
                    <h3>facebook</h3>
                  </li>
                </FlexList>
              </FlexListColumnStart>
            </Box>
          </Flex>
        </Box>
        <UnderlineLight />
        <Box paddingY={1}>
          <FlexListSpaceBetween>
            <Box>
              <Text as="p" className="copyright">
                Copyright © rights reserved.
              </Text>
            </Box>
            <Box>
              <FlexList>
                <l1>Terms & Conditions</l1> <li>Privacy Policy</li>
                <li>Covid-19 & Booking Flexibility</li>
              </FlexList>
            </Box>
          </FlexListSpaceBetween>
        </Box>
      </Container>
    </Box>
  )
}
