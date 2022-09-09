import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { Box, Underline, Heading } from "./ui"

import * as styles from "./contactform.css"
import * as main from "./ui.css"

function ContactForm() {
  const results = useStaticQuery(graphql`
    {
      datoCmsLogoItem {
        logoImage {
          gatsbyImageData
        }
      }
    }
  `)
  const data = results.datoCmsLogoItem.logoImage
  const image = getImage(data)

  return (
    <div className={main.centerDiv}>
      <div className={styles.contactFormContainer}>
        <div className={styles.formContainer}>
          <Box center paddingY={3}>
            <Heading as="h1" color="green">
              &bull; Keep in Touch &bull;
            </Heading>

            <div className={styles.underlineForm}>
              <Underline />
            </div>

            <div class={styles.logoWrapper}>
              <GatsbyImage image={image} alt="logo" />
            </div>
          </Box>
          <form action="#" method="post" id="contact_form">
            <div class="name">
              <label for="name"></label>
              <input
                type="text"
                placeholder="My name is"
                name="name"
                id="name_input"
                required
              />
            </div>
            <div class="email">
              <label for="email"></label>
              <input
                type="email"
                placeholder="My e-mail is"
                name="email"
                id="email_input"
                required
              />
            </div>
            <div class="telephone">
              <label for="name"></label>
              <input
                type="text"
                placeholder="My number is"
                name="telephone"
                id="telephone_input"
                required
              />
            </div>
            <div class="subject">
              <label for="subject"></label>
              <select
                placeholder="Subject line"
                name="subject"
                id="subject_input"
                required
              >
                <option disabled hidden selected>
                  Subject line
                </option>
                <option>I'd like to ask on general enquiries</option>
                <option>I'd like to Book With you</option>
                <option>I'd like to make a proposal</option>
              </select>
            </div>
            <div class="message">
              <label for="message"></label>
              <textarea
                name="message"
                placeholder="I'd like to chat about"
                id="message_input"
                cols="30"
                rows="5"
                required
              ></textarea>
            </div>
            <div class="submit">
              <input type="submit" value="Send Message" id="form_button" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
