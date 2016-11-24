var colors = require('./colors')
module.exports = function background(query) {
  query = query || ''
  query? query = `-${query}`: ''

  var output = ''
  Object.keys(colors)
    .map(
      function(k) {
        output += `.bg-${k}${query}:{background-color:${colors[k]};}\n`
      }
    )

  return output
}
