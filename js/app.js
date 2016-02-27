(function() {
	'use strice';
	var app = angular.module('myApp', ['ngRoute']);
	app.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				redirectTo: '/home'
			})
			.when('/home', {
				templateUrl: '../templates/home.html'
			})
			.when('/gallery', {
				templateUrl: '../templates/gallery.html',
				controller: 'NavCtrl'
			})
			.when('/about', {
				templateUrl: '../templates/about.html'
			})
			.when('/contact', {
				templateUrl: '../templates/contact.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	})

}());
