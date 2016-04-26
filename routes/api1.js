let express = require('express');
let router = express.Router();
let path = require('path');
let bookshelfApi = require('bookshelf-api')({
	path: path.join(__dirname, '../models')
});
let loggedIn = require('../lib/middleware/logged-in');


router.post(
	'/storyRead',
	loggedIn,
	function(req, res, next){
		console.log('working');
		req.body.userId = req.user.id;
		next();
	},
	bookshelfApi
);

router.use('/', 
	loggedIn,
	bookshelfApi
);

module.exports = router;
