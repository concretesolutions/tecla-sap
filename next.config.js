// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd
    ? 'https://cdn.statically.io/gh/concretesolutions/tecla-sap/gh-pages/'
    : '',
  pwa: {
    dest: 'public'
  }
})
