var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

const customLoaders = {
  docs: require.resolve('./loaders/docs-loader.js'),
  widget: require.resolve('./loaders/widget-loader.js'),
}

const cssLoaders = utils.cssLoaders({
  sourceMap: isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap,
  extract: isProduction
})

module.exports = {
  loaders: Object.assign({}, customLoaders, cssLoaders)
}
