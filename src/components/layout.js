import React, { useEffect } from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"

import { animateFrom, hide } from "./animations"

import Footer from "./footer"
import Head from "./head"
import "../styles/styles.css"
import Header from "./header"
import "../styles/typography.css"

gsap.registerPlugin(ScrollTrigger)

const Layout = props => {
  useEffect(() => {
    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
      hide(elem)

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          animateFrom(elem)
        },
      })
    })
  }, [])
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
