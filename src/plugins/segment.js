const path = require('path')

const DEFAULT_OPTIONS = {
  appId: null,
  host: 'https://segment.ripplex.io/ana_dev.js',
  enableOnDevMode: false, // if 'false', segment will be fired on NODE_ENV=production only
}

module.exports = function (context, opts) {
  const options = { ...DEFAULT_OPTIONS, ...opts }
  const isEnabled =
    (process.env.NODE_ENV === 'production' || options.enableOnDevMode) &&
    options.appId

  return {
    name: 'docusaurus2-segment',

    getClientModules() {
      return isEnabled ? [path.resolve(__dirname, './analytics')] : []
    },

    injectHtmlTags() {
      if (!isEnabled) return {}
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
            },
            innerHTML: `
              !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="${options.host}";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.13.1";
              analytics.load("${options.appId}");
              analytics.page();
              }}();
            `,
          },
        ],
      }
    },
  }
}
