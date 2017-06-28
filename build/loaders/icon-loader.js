module.exports = function (source, map) {
  console.log(source, map)
  this.callback(null, `module.exports = function(Component) {Component.options.__icon = ${JSON.stringify(source)}}`, map)
}
