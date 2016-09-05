'use strict'
const fs = require('fs')
const nunjucks = require('nunjucks')

nunjucks.configure({ autoescape: true })

const data = {
  developers: require('../data')
}
data.wrapTag = tags => tags.map(tag => `\`${tag}\``).join(' ')
data.renderName = developer => developer.blog ?
  `[${developer.name}](${developer.blog})` :
  developer.name

try {
  const res = nunjucks.renderString(fs.readFileSync('./scripts/template.md', 'utf8'), data)
  fs.writeFileSync('./README.md', res, 'utf8')
  console.log('Success!')
} catch (err) {
  console.log(err.stack)
  process.exit(1)
}