'use strict'; 

const express = require('express'); 
const bodyParser = require('body-parser');
const config = require("./config.js");

const twit = require('twit');
const T = new twit(config);

const routes = require('./routes/index.js');

const app = express(); 

//view engine setup
app.set('view engine', 'pug'); 
app.set('views', __dirname + '/views'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(__dirname + '/public'));

app.use((req, res, next) => {
	
	T.get('account/settings', (err, data, res) => {
		req.screen_name = data.screen_name;
		next();
	});
	
}, (req, res, next) => { 
	
	T.get('statuses/user_timeline', {count: 5}, (err, data, res) => {
		req.timeline = data;
		next();		
	});

}, (req, res, next) => { 
	
	T.get('friends/list', {count: 5}, (err, data, res) => {
		req.friends = data.users;
		next();		
	});

}, (req, res, next) => { 
	
	T.get('direct_messages', {count: 5}, (err, data, res) => {
		req.messages = data;
		next();		
	});

});

app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(3000, () => {
	console.log("The frontend server is running on port 3000!")
});


module.exports = app; 