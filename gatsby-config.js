module.exports = {
	siteMetadata: {
		title: `Bag O Sand`,
		description: `An eCommerce platform for selling really small bags of sand`,
		author: `@c-sinclair`
	},
	plugins: [
		`gatsby-plugin-stripe`,
		{
			resolve: `gatsby-source-stripe`,
			options: {
				objects: ['Product', 'SKUs'],
				secretKey: process.env.STRIPE_SECRET_KEY
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `bag-o-sand`,
				short_name: `sand`,
				start_url: `/`,
				background_color: `#041322`,
				theme_color: `#041322`,
				display: `minimal-ui`,
				icon: `src/images/sand-icon.png` // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
}
