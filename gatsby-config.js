module.exports = {
  //pathPrefix: process.env.NODE_ENV === "development" ? "" : "/mhn",
  //pathPrefix: "/manuel-belgrano-transformarlarealidad",
  pathPrefix: "/",
  siteMetadata: {
    siteUrl: `https://change.me`,
    title: `Museo Histórico Nacional`,
    description: `Sitio Web del Museo Historico Nacional`,
    author: `@diegodorado`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: "pages"
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat", "Josefin Sans"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
              srcSetBreakpoints: [ 400, 720 ] ,
              linkImagesToOriginal: false,
              quality: 90,
            },
          },
        ],
      },
    },

    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Museo Histórico Nacional`,
        short_name: `mhn`,
        start_url: `/`,
        background_color: `#006699`,
        theme_color: `#006699`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'es'
      }
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
