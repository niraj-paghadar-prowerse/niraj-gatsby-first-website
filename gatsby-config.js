module.exports = {
    siteMetadata: {
      title: "Nirajkumar Paghadar",
      description: "I am learning JavaScript, React, GraphQL and Gatsby",
      author: "Prowerse Tech",
    },
    plugins: [
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-sass",
      "gatsby-transformer-remark",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "src",
          path: `${__dirname}/src/`,
        },
      },
      "gatsby-transformer-sharp",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
            {
              resolve: "gatsby-remark-images",
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false,
              },
            },
          ],
        },
      },
    ],
  }