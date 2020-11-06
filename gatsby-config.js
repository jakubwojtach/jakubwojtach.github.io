/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: "http://blog.awojtach.vot.pl/graphql",
      },
    },
    'gatsby-plugin-styled-components',
    {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `pt sans\:400,400i,700`,
            `roboto\:300i,400,500,700,900`,
            `montserrat\:700,800,900`,
          ],
          display: 'swap'
        }
      }
  ],
}
