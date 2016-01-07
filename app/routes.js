var Nerd = require('./models/nerd')

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
    res.sendFile('./public/views/index.html'); // load our public/index.html file
  })
}
