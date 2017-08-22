const users = require('./../controllers/users.js');
const {resolve} = require('path');
module.exports = function (app) {
	//Set up routes
	// Index route
	app.get('/api/users', users.index);

	app.all("*", (req, res, next) => {
		res.sendfile(resolve("./public/dist/index.html"));
	})

};
