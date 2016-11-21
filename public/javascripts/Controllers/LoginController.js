mbsHumidity.controller("LoginController", function($scope,$http,$location){
      $scope.SignIn=function(){
  	  console.log("in12");
  	  console.log("pass"+$scope.password);
  	  	         $http({
       url: '/afterSignIn', 
       method: 'POST', 
       data: { "email": $scope.email, "password": $scope.password }
       }).success(function (data, status, headers, config) {
       		console.log(data);
       		if(data=="Invalid Login"){
  				console.log(data);
  				alert("Soryy  Invalid Username/password");
  				
  			}
       		else
       			{
       			$location.path("/dashboard");
       			}
       }).error(function (data, status, headers, config) {
        		
       });
};

			
});
