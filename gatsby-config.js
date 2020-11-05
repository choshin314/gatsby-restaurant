/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Málà Szechuan Cuisine",
    titleTemplate: "%s | Málà Szechuan Cuisine",
    description: "Málà is the hottest Szechuan-style Chinese restaurant in St. Louis",
    siteUrl: "https://malacuisine.netlify.app"
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'vq3awelcvugd',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'localImages',
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: process.env.SNIPCART_KEY,
        autopop: true,
        styles: false
      }
    }
  ],
}
