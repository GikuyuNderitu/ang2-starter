const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

module.exports = function(app) {
	'use strict';
	app.use(express.static(path.join(__dirname,'/../../public/dist')))
	app.use(bodyParser.json())
	console.log('Middleware initialized');
};
