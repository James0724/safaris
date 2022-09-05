import React from "react"
import {
  Box,
  Flex,
  Heading,
  Kicker,
  Subhead,
  VideoBackground,
  VideoWrapper,
} from "./ui"

import backgroundclip from "../clips/zebra.mp4"

export default function Hero() {
  return (
    <Flex gap={4} variant="responsive" marginY="0">
      <Box padding="0" paddingY="0" height="thirdscreen">
        <VideoWrapper height="full">
          <Heading as="h1" index="2" color="green">
            <Kicker color="white">Safaris Tour and Travel</Kicker>
            ENDLESS PLAIN SAFARIS
          </Heading>
          <Subhead as="h2" index="2" color="yellow">
            Endless Discoveries
          </Subhead>
          <VideoBackground autoPlay muted loop>
            <source src={backgroundclip} type="video/mp4" />
          </VideoBackground>
        </VideoWrapper>
      </Box>
    </Flex>
  )
}
