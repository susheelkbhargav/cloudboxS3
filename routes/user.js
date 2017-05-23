
/*
 * GET users listing.
 */

exports.list = function(req, res){
	var AWS = require('aws-sdk');
	
		AWS.config.loadFromPath('config.json');
		var s3 = new AWS.S3();
		var bucketParams = {Bucket: 'shareboxa1b4988c-112e-4c7a-8bb9-67033eb6c1ef'};
		//s3.createBucket(bucketParams);
		var s3Bucket = new AWS.S3( { params: bucketParams } );
		var data = {Key: "resume.txt", Body: "../"};
		s3Bucket.putObject(data, function(err, data){
		  if (err) 
		    { console.log('Error uploading data: ', data); 
		    } else {
		    	//res.render('', { title: 'Express' });
		    	res.send("Success");
		    	console.log('succesfully uploaded the image!');
		    }
		});
		
	
};