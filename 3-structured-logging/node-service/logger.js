var bunyan = require('bunyan')
  , logOpts = require('./config').logger
  , stream = require('bunyan-logstash-tcp').createStream(logOpts.logstashTcp)
;

var opts = {
	name: logOpts.name,
	streams: [
		{
			type: "raw",
			level:"debug",
			stream: stream
		}
	]
}

module.exports=bunyan.createLogger(opts);