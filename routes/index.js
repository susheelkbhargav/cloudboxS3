
/*
 * GET home page.
 */
var AWS = require('aws-sdk');
exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};