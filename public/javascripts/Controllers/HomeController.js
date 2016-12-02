'use strict';

mbsHumidity.controller("HomeController", function($scope,$http,$location){
    $scope.submit=function(){
    	  console.log("in12");
    	  console.log("pass"+$scope.password);
    	  	         $http({
         url: '/afterSignUp', 
         method: 'POST', 
         data: { "firstname": $scope.firstname,
        	 "lastname": $scope.lastname,
        	 "phoneno": $scope.phoneno,
        	 "address": $scope.street,
        	 "zipcode": $scope.city,
        	 "email": $scope.email, 
        	 "password": $scope.password }
         }).success(function (data, status, headers, config) {
         		console.log(data);
         			$location.path("/login");
         }).error(function (data, status, headers, config) {
          		
         });
  };	
			$scope.login = function() {
				$location.path("/login");				
			};
			

			
});
