/**
 * http://usejsdoc.org/
 */
var ejs = require("ejs");
var mysql = require('./mysql');

exports.afterSignIn= function afterSignIn(req,res){
	// check user already exists
	console.log(req.param);
	var password= req.param("password");
	var email= req.param("email");
	var getUser="select * from USER_DETAILS where email='"+req.param("email")+"' and password='" + password +"'";
	console.log("Query is:"+getUser);
	var flag=0;
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){
				console.log(req.session);
				req.session.username=results[0]["email"];
     			req.session.password=results[0]["password"];
     			req.session.userid=results[0]['id'];
     			req.session.name=results[0]["firstname"]+results[0]["lastname"];
     			console.log(req.session.username);
				res.send(results);
			}
			else {    
				
				console.log("Invalid Login");
				res.send("Invalid Login");
			 flag=1;
			}
		}  
	},getUser);	
};
exports.afterSignUp= function afterSignUp(req,res){
	var firstname= req.param("firstname");
	console.log("Firstname is: "+firstname);
	var password= req.param("password");
	console.log("password is: "+password);
	var email= req.param("email");
	console.log("Email is: "+email);
   	res.send("Added");
};