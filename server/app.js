var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static('./app'));

app.listen(port, function() {
	console.log('Express server now listening on port ' + port);
	console.log('env = ' + app.get('env') +
		'\n__dirname = ' + __dirname + 
		'\nprocess.cwd = ' + process.cwd());
});