mbsHumidity.controller("SensorMapController", function($scope,$http,$location,$window,$route){
	$scope.initialize=function()
	{
        
//		  		 var names = request.getAttribute("names");
//				 ArrayList<Double> lat = (ArrayList<Double>)request.getAttribute("lat");
//				 ArrayList<Double> lon = (ArrayList<Double>)request.getAttribute("lon");           
		                 
		 

		                   var myOptions = {
		                     center: new google.maps.LatLng(37.33495, -121.88198),
		                     zoom: 9,
		                     mapTypeId: google.maps.MapTypeId.ROADMAP

		                   };
		                   var map = new google.maps.Map($scope.googleMap,myOptions);

		                   setMarkers(map);

	}
	$scope.billing = function() {
		$location.path("/billing");				
	};

	$scope.sensor = function(id) {
		console.log("Sensor Id is: "+id);
		$window.sessionStorage.sensorId=id;
		console.log("Sensor Id is: "+$window.sessionStorage.sensorId);
		$route.reload();				
	};		
	$scope.dashboard=function(){
		console.log("dashboard from sensor");
		$location.path("/dashboard");
	}

    function setMarkers(map){	

                var marker

         for (var i = 0; i < names.size(); i++)
           { 

           var name = names.get(i);
           var lat = lat.get(i);
           var lon = lon.get(i);
          

           latlngset = new google.maps.LatLng(lat, lon);

            var marker = new google.maps.Marker({  
                    map: map, title: name , position: latlngset  
                  });
                  map.setCenter(marker.getPosition())


                  var content = "Sensor Name: " + name     

            var infowindow = new google.maps.InfoWindow()

          google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
                  return function() {
                     infowindow.setContent(content);
                     infowindow.open(map,marker);
                  };
              })(marker,content,infowindow)); 

            }
    }
});
