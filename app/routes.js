var Nerd = require('./models/nerd')
var path = require('path')

module.exports = function (app) {
  app.get('/api/nerds', function (req, res) {
    // Get all nerds in the database
    Nerd.find(function (err, data) {
      if (err) res.send(err)
      res.json(data)
    })
  })

  // Handle all Angular requests
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html')) // load our public/index.html file
  })
}
