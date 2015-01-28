
/*
 * GET home page.
 */
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

require("javascript.util");
/**
 * Create a list of IP Addresses that are allowed or blacklisted. This can be in memory or in some database.
 * Currently keeping it in memory
 */
var ArrayList = javascript.util.ArrayList;
var array = new ArrayList();
array.add('127.0.0.1');
array.add('54.69.156.195');

exports.isIPAllowed = function(req, res,next)
{
	/*console.log(req.connection.remoteAddress);
	for(var i =0;i<array.size();i++)
	{
		if(array.get(i)===req.connection.remoteAddress)
		{
			next();
		}
	}*/
	next(); // allowing all the IP's for demo purpose
};


/**
 * Expecting the API request in the request parameters which will be sent by the client
 */
exports.get = function(req, res){
	
	/**
	 * sending the same req to the target API. So no modifications/changes in the header required to be done to the request object
	 */
	console.log('reached here ' + req.query.url);
	proxy.web(req, res, { target: req.query.url });
	
};

/**
 * Expecting the API request in the request parameters which will be sent by the client
 */
exports.remove = function(req, res){

	/**
	 * sending the same req to the target API. So no modifications/changes in the header required to be done to the request object
	 */
	proxy.web(req,res,{target:req.query.url});
};


/**
 * Expecting the API request in the request parameters which will be sent by the client
 */
exports.put = function(req, res){

	/**
	 * sending the same req to the target API. So no modifications/changes in the header required to be done to the request object
	 * using the same req object, so the data in the request body goes along
	 */
		
	proxy.web(req,res,{target:req.query.url});
};



/**
 * Expecting the API request in the request parameters which will be sent by the client
 */
exports.add = function(req, res){
	
	/**
	 * sending the same req to the target API. So no modifications/changes in the header required to be done to the request object
	 * using the same req object, so the data in the request body goes along
	 */
	proxy.web(req,res,{target:req.query.url});
};

proxy.on('error', function (err, req, res) {
	  res.writeHead(500, {
	    'Content-Type': 'text/plain'
	  });

	  res.end('Something went wrong. Please try again..');
	});