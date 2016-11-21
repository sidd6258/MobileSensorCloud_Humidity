/**
 * http://usejsdoc.org/
 */
var ejs = require("ejs");

exports.afterSignIn= function afterSignIn(req,res){
	// check user already exists
	console.log(req.param);
	var password= req.param("password");
	var email= req.param("email");
	if(password = "123" &&  email == "siddharth6258@gmail.com"){
				console.log("valid Login");
				res.send("valid Login");
			}
			else {    
				res.send("Invalid Login");
			}
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