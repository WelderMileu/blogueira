const path = require('path')

module.exports = {
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options : {
				name : `imagens`,
				path : path.join(__dirname, `src`,`pages`,`assets`, `images`)
			}
		},

		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`
	]
}