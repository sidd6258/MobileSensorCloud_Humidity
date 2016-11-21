'use strict';
var mbsHumidity=angular.module("mbsHumidity",['ngRoute','ui.bootstrap'])
.config(function ($routeProvider,$locationProvider){
	console.log("in");
	$routeProvider.when('/',{
		templateUrl : 'template/home.ejs',
		controller : 'HomeController'
	}).when('/login',{
		templateUrl : 'template/login.ejs',
		controller : 'LoginController'
	}).when('/dashboard',{
		templateUrl : 'template/dashboard.ejs',
		controller : 'DashBoardController'
	}).when('/sensor',{
		templateUrl : 'template/sensor.ejs',
		controller : 'SensorController'
	}).when('/billing',{
		templateUrl : 'template/billing.ejs',
		controller : 'BillingController'
	}).otherwise({
		redirectTo : '/'
	});
	$locationProvider.html5Mode({
		enabled : true,
		requireBase : false
	});
});