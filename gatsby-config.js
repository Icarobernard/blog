module.exports = {
  siteMetadata: {
    siteTitle: 'Icaro Bernard',
    siteDescription: 'Sobre coisas que curto explicar',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://chronoblog.now.sh/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Icaro Bernard', // for example - 'Ivan Ganev'
    authorDescription: ' ', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `at`,
        url: `mailto:icarobernar@hotmail.com`
      },
      {
        icon: `github`,
        url: `https://github.com/icarobernard`
      },
      {
        icon: `linkedin`,
        url: `https://www.linkedin.com/in/icaro-bernard-17a983184/`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'Ver mais',
          feedSearchPlaceholder: 'Pesuisa',
          cardReadMoreButton: 'Ler mais →',
          allTagsButton: 'Todas tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 3,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
