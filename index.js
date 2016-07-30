var through = require('through2')

module.exports = function(file) {
  return through(function(buf, enc, next) {
    var contents = buf.toString('utf8')

    this.push(contents
      .replace(/require\('tap'\)\.test/g, "require('tape')"))
    
    next()
  })
}