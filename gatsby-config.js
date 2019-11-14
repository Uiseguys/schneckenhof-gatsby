module.exports = {
  siteMetadata: {
    title: `Schneckenhof Weingut`,
    description: `A site about wine`,
    author: `Cris Shaki`,
  },
  plugins: [
    `gatsby-source-wines`,
    `gatsby-source-news`,
    `gatsby-source-settings`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Schneckenhof-Weingut`,
        short_name: `Weingut`,
        start_url: `/`,
        background_color: `#222`,
        theme_color: `#be906c`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo_visual.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-3744376-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: [],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
