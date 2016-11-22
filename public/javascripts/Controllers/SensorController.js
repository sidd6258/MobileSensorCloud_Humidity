mbsHumidity.controller("SensorController", function($scope,$http,$location,$window){
	$scope.populate=function()
	{		
		var city;
		var data;
		var sensorId=$window.sessionStorage.sensorId;
		console.log("sensorId= "+sensorId);
		if(sensorId==1)
			{
			data = [70,50,30,50,60,64,35,72,86,75,34,78];
			city="New York";
			}
		if(sensorId==2)
		{
		data = [50,30,99,40,55,11,13,17,98,75,34,78];
		city="London";
		}
		if(sensorId==3)
		{
		data = [50,30,99,40,55,11,13,17,98,75,34,78];
		city="Kolkata";
		}
		if(sensorId==4)
		{
		data = [50,30,99,40,55,11,13,17,98,75,34,78];
		city="Mumbai";
		}
		
		//var newyork = [70,50,30,50,60,64,35,72,86,75,34,78];
		var chart = new Highcharts.Chart({
            colors: ["#7cb5ec", "#f7a35c"],
            chart: {
                type: 'line',
                renderTo: 'container'
            },
    title: {
        text: 'Humidity'
    },
    subtitle: {
        text: 'Stored sensor data'
    },
    xAxis: {
    	title: { 
    		text: 'Time'},
    	categories: ['1','2','3','4','5','6','7','8','9','10','11','12']
    },
    yAxis: {
    	title: {
    		text: 'Humidity (Percentage)'
    		},
    		plotlines:[{
    		      value: 0,
    		      width: 1,
    		      color: '#808080'
    		   }]
    },
    tooltip: {
    	valueSuffix: '%'
	},
	legend: {
			   layout: 'vertical',
			   align: 'right',
			   verticalAlign: 'middle',
			   borderWidth: 0
				},
    series: [{
        name: city,
        data: data

    }]
});

	}
	$scope.billing = function() {
		$location.path("/billing");				
	};

			
});
