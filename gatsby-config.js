module.exports = {
  siteMetadata: {
    title: `Bag O Sand`,
    description: `The only place to purchase luxury grade tiny bags of sand`,
    author: `Conor Sinclair`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/products`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/images/blacksandpile.png'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    // 'gatsby-plugin-robots-txt',
    // `gatsby-plugin-netlify`,
    // `gatsby-plugin-netlify-cache`,
    {
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
					}
				]
			}
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    }
  ],
}
