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
	var getUser="select * from user_details where email='"+req.param("email")+"' and password='" + password +"'";
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
	var query= "INSERT INTO `user_details` (`firstname`, `lastname`, `email`, `password`, `phone`, `address`, `zipcode`)  VALUES " +
	"('"+req.param("firstname")+"', '"+req.param("lastname")+"', '"+req.param("email")+"', '"+req.param("password")+"', '"+req.param("phoneno")+"', '"+req.param("address")+"', '"+req.param("zipcode")+"')";
	console.log(query);
    mysql.insertData(function(err,result){
    	var results = []
    	results.push({"username": req.param("username")});
    	results.push({"password": req.param("password")});
    	
    	results.push({"Name": req.param("fname")});
    	if(err)
    	{
    		throw err;
    	}
    	else
    		{
    		res.send("Added");
    				}
    },query);	
};

exports.loadSensor= function loadSensor(req,res) {

	console.log("id"+req.session.userid);
	var id=req.session.userid;
	var getSensorData="select * from sensor_details sd, humidity_data hd where sd.user_id = hd.user_id and sd.user_id="+id+"";
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			console.log(results);
			res.send(results);
		}
	},getSensorData);
};