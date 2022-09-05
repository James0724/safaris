require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://endlessplainsafaris.netlify.app/",
    title: "Endless Plain Safaris Tour Travels",
    author: `James Kahoro`,
    description: "Endless safaris exploration tour operater in east Africa",
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-vanilla-extract`,
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATOCMS_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images` },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Endless Plain Safaris",
        short_name: "Safaris",
        start_url: "/",
        // These can be imported once ESM support lands
        //background_color: "#ffffff",
        //theme_color: "#db3000",
        icon: "src/favicon.png",
      },
    },
  ],
}
