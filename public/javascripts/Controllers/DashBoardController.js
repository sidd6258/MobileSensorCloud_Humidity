mbsHumidity.controller("DashBoardController", function($scope,$http,$location,$window,$route){
    $scope.load=function(){
   	$scope.firstname=$window.sessionStorage.firstname;
   	 console.log($window.sessionStorage.firstname);
   	 console.log($window.sessionStorage.userid);
 	         $http({
 		         url: '/loadSensor', 
 		         method: 'GET',
 		         }).success(function (data, status, headers, config) {
 		        	 console.log(data);
 		        	 $scope.sensorData=data;
 		        	 console.log(data[0]["sensor_id"]);
 		         }).error(function (data, status, headers, config) {
	          		console.log("err");
 		         });
// 	       $http({
// 		         url: '/loadfollowers', 
// 		         method: 'GET',
// 		         }).success(function (data, status, headers, config) {
// 		        	 console.log(data);
// 		        	 console.log(data[0]["count"]);
// 		        	 var id=document.getElementById("followers");
// 		        	 id.innerHTML=data[0]["count"];
// 		         }).error(function (data, status, headers, config) {
//	          		console.log("err");
// 		         });
    }
	$scope.getSensor = function(id) {
		//var id=1;
		console.log("Sensor Id is: "+id);
		$window.sessionStorage.sensorId=id;
		console.log("Sensor Id is: "+$window.sessionStorage.sensorId);
		$location.path("/sensor");				
	};
	$scope.billing = function() {
		console.log("Hi in billing");
		$location.path("/billing");				
	};
	$scope.dashboard=function(){
		console.log("dashboard from dashboard");
		$route.reload();		
	}
});
