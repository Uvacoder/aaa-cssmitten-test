const theme = require('./theme')
const typography = require('./typography')
const cursor = require('./cursor')
const layout = require('./layout')
const margin = require('./margin')
const padding = require('./padding')
const overflow = require('./overflow')
const visibility = require('./visibility')
const objectFit = require('./object-fit')
const objectPosition = require('./object-position')
const outline = require('./outline')
const opacity = require('./opacity')
const container = require('./container')
const media = require('./media')
const userSelect = require('./user-select')

module.exports = function cssmitten (props) {
  try {
    const config = JSON.parse(props)
    const queries = config.queries
    let output = theme(config)
    output += styles({config})

    Object.keys(queries)
      .map(
        function (query) {
          output += media(queries[query], styles({config, query}))
        }
      )

    return output
  } catch(err) {
    throw new Error('Unable to parse config.json')
  }
}

function styles (state={}) {
  const config = state.config || {}
  const queries = config.queries || {}
  const query = state.query || ''
  const label = query
    ? `-${query}`
    : ''
  const width = queries[query]
  return /*css*/`
${container({width, label})}
${typography({config, label})}
${layout({config, label})}
${margin({config, label})}
${padding({config, label})}
${overflow(label)}
${visibility(label)}
${objectFit(label)}
${objectPosition(label)}
${outline(label)}
${opacity(label)}
${cursor(label)}
${userSelect(label)}
`
}
