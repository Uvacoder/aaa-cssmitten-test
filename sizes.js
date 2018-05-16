var Scale = require('./scale')
var rems = require('./rems')
module.exports = function sizes (state) {
  state = state || {}
  var config = state.config
  var query = state.query
  var scale = Scale(config)
  var output = '/* SIZES */\n'
  var i = 0
  var l = scale.length
  var half = Math.floor(l * 0.5)
  var step = half
  var v
  for (i; i < l; i++) {
    var s = step--
    v = scale[i]
    output += `.fs${s}${query}{font-size:${rems(v)};}\n`
  }
  return output
}
