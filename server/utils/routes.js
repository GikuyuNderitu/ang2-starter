const users = require('./../controllers/users.js');
module.exports = function (app) {
	//Set up routes
	// Index route
	app.get('/', users.index);

	app.all("*", (req, res) => {
		res.redirect("/");
	})

};
