var express = require('express')
var app = express()

app.set('view engine', 'jade');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index', { title: 'Check In'});
});

app.get('/checkout-tin', function (req, res) {
  res.render('checkout-tin', { title: 'Scan Tin'});
});

app.get('/checkin-tin', function (req, res) {
  res.render('checkin-tin', { title: 'Scan Tin'});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
