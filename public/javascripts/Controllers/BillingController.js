mbsHumidity.controller("BillingController", function($scope,$http,$location){
	$scope.sensor = function() {
		$location.path("/sensor");				
	};
	$scope.billing = function() {
		$location.path("/billing");				
	};
			
});
