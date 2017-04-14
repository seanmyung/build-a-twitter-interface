'use strict';

const express = require('express');
//const bodyParser = require('body-parser');
const config = require("../config.js");
const twit = require('twit');
const T = new twit(config);

const router = express.Router();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res, next) => {
	res.render('index', {data: req});
});

router.post('/', (req, res, next) => {
	var page = res;
	var tweets = req.body.tweets;
	T.post('statuses/update', {status: tweets}, (err, data, res) => {
			if(!err) {
				page.redirect('/')
			} else {
				res.render('error', {
      	message: err.message,
      	error: err
				});				
			}
		});

});

module.exports = router; 
