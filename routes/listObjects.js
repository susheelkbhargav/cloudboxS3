var AWS = require('aws-sdk');
AWS.config.loadFromPath('config.json');
var s3 = new AWS.S3();
exports.list = function(req, res){
	var params = {Bucket: 'shareboxa1b4988c-112e-4c7a-8bb9-67033eb6c1ef'};
	s3.listObjects(params, function(err, data){
		console.log("Data:",data );  
		var bucketContents = data.Contents;
		  var urlArr= [];
		    for (var i = 0; i < bucketContents.length; i++){
		      var urlParams = {Bucket: 'shareboxa1b4988c-112e-4c7a-8bb9-67033eb6c1ef', Key: bucketContents[i].Key};
		        s3.getSignedUrl('getObject',urlParams, function(err, url){
		          console.log('the url of the image is', url);
		          urlArr.push(url);
		        });
		    }
		    res.render('listObjects', {"urlArr":bucketContents, "abc": urlArr } );
		});
	
};
//var bucketInstance = new AWS.S3();
exports.deleteFile=function(req, res){
	var filePath= req.param("fileName");
	    
	    var params = {
	        Bucket: 'shareboxa1b4988c-112e-4c7a-8bb9-67033eb6c1ef',
	        Key: filePath
	    };
	    s3.deleteObject(params, function (err, data) {
	        if (data) {
	            console.log("File deleted successfully");
	            res.redirect('/list');
	        }
	        else {
	        	
	            console.log("Check if you have sufficient permissions : "+err);
	        }
	    });
	
	
};