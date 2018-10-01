const { getOptions } = require('loader-utils')

module.exports = function (content) {
  const options = getOptions(this)
  options.callback(content)
}
