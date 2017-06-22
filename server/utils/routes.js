const users = require('./../controllers/users.js');
module.exports = function (app) {
	//Set up routes
	// Index route
	app.get('/api/users', users.index);

	app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./public/dist/index.html"));
	})

};
