var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var methodOverride = require('method-override')

var db = require('./config/db')
var port = process.env.PORT || 3000

mongoose.connect(db.url)

// Parse application/json as JSON
app.use(bodyParser.json())

// Parse application/vnd.api+json as JSON
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Use X-HTTP-Method-Override header as override in each server request
app.use(methodOverride('X-HTTP-Method-Override'))

app.use(express.static(__dirname + '/public'))

require('./app/routes')(app)

app.listen(port, function () {
  console.log('Listening on port ' + port + '...')
})

module.exports = app
