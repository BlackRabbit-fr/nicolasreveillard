require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Nicolas Réveillard',
    siteUrl: 'https://nicolasreveillard.fr',
    description:
      "Site web de l'artiste peintre Nicolas Réveillard originaire de la Drôme. Ce site regroupe quelques-unes de ses oeuvres en format huiles sur toile et papier.",
    keywords: [
      'nicolas',
      'reveillard',
      'aquarelle',
      'encre',
      'huile sur toile',
      'paysages',
      'drome',
      'nature',
    ],
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
