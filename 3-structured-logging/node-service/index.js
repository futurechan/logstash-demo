
var express = require('express')
	, app = express()
	, logger = require('./logger')
    , morgan = require('morgan')


// request logger
app.use(morgan(function (tokens, req, res) {
    logger.debug({
        method:tokens['method'](req, res),
        url:tokens['url'](req,res),
        statusCode:tokens['status'](req,res),
        referrer:tokens['referrer'](req,res),
        "remote-addr":tokens['remote-addr'](req,res),
        "remote-user":tokens['remote-user'](req,res),
        "user-agent":tokens['user-agent'](req,res)
    })
}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  logger.info('Example app listening at http://%s:%s', host, port);

});
