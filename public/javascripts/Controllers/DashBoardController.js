mbsHumidity.controller("DashBoardController", function($scope,$http,$location,$window,$route){
	$scope.sensor = function(id) {
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
