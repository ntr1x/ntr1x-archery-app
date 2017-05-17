module.exports = function (source, map) {
  this.callback(null, `module.exports = function(Component) {Component.options.__widget = ${JSON.stringify(source)}}`, map)
}
