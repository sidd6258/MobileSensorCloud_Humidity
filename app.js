
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , home = require('./routes/home')
  , mysql= require('./routes/mysql');
var app = express();
var session = require('express-session');
var ejs=require("ejs");

mysql.createConnectionPool();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('9876534'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
	secret : '9876534',
	resave : false,
	saveUninitialized : false,
	cookie:{maxAge : 600000,rolling : true}
}));
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/loadSensor', home.loadSensor);
app.post('/afterSignIn', home.afterSignIn);
app.post('/afterSignUp', home.afterSignUp);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
