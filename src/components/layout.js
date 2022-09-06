import React from "react"
import Footer from "./footer"
import Head from "./head"
import "../styles/styles.css"
import Header from "./header"
import "../styles/typography.css"

const Layout = props => {
  return (
    <>
      <Head {...props} />
      <Header />
      <h1>hello</h1>
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
