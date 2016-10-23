var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.headers['X-Forwarded-Proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
    //res.redirect(301, ['http://', req.get('Host'), req.url].join(''));
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
