const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function requestLogger(req, res, next) {
  console.log({method: req.method, path: req.path, headers: req.headers, body: req.body, query: req.query});
  next();
});


app.get('/health', function(req, res) {
  return res.status(200).json({ status: 'OK' });
});

app.post('/**', function (req, res) {
  if ('timeout' in req.query){
    return;
  }
  return res.status(req.query.status || 200)
    .json(req.body);
});


app.listen(port, function(){
  console.log(`Server listening on port ${port}`);
});

[
  { host: 'locahost',
    port: 4000,
    status: 'OK'
  }
]
