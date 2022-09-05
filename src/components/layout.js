import React from "react"
import Footer from "./footer"
import Head from "./head"
import "../styles/styles.css"
import Header from "./header"

const Layout = props => {
  return (
    <>
      <Head {...props} />
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
