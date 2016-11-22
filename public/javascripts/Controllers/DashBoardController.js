mbsHumidity.controller("DashBoardController", function($scope,$http,$location,$window){
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
			
});
