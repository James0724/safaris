import React from "react"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import "../styles/styles.css"

export default function Homepage() {
  return (
    <Layout>
      <sections.HomepageHero />
      <sections.HomepageAbout />
      <sections.HomepageCategoryList />
      <sections.HomepageContactBanner />
      <sections.HomepageBanner />
      <sections.HomepageFeatured />
    </Layout>
  )
}
