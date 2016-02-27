/*(function() {
	'use strice';
	var app = angular.module('myApp', ['ngRoute']);
	app.config(function($routeProvider) {
		$routeProvider
			.when('/gallery', {
				redirectTo: '/gallery/wedding'
			})
			.when('/gallery/wedding', {
				templateUrl: 'js/gallery/templates/weddingImg.html'
			})
			.when('/gallery/trash', {
				templateUrl: 'js/gallery/templates/trashImg.html'
			})
			.when('/mitzva', {
				templateUrl: '/templates/about.html'
			})
			.when('/video', {
				templateUrl: '/templates/contact.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	})

}());*/