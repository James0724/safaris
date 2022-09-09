import React from "react"

import Layout from "../components/layout"
import * as sections from "../components/sections"

export default function About() {
  return (
    <Layout>
      <sections.AboutHero />
      <sections.HomepageBanner />
    </Layout>
  )
}
