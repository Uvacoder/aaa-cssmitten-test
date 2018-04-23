var clrs = require('./colors')
module.exports = function variables () {
  var sections = Object.keys(clrs)
  var output = `/* VARIABLES */
:root {\n`
  var colors
  sections.forEach(function (section) {
    colors = clrs[section]
    colors && colors.map(function (color, i) {
      output += `  --${section.charAt(0)}${i}:${color.value};/* ${color.label} */\n`
    })
  })
  output += `}\n`
  return output
}
