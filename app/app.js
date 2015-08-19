var userProfile = angular.module('userProfile', [] );

userProfile.controller('UserListCtrl', function ($scope, $http) {

	// Make a request to users data from JSON-REST API 
	$http.get('http://jsonplaceholder.typicode.com/users').
	success(function(data) {
		$scope.users = data;
	});

	$(document).foundation();

	$scope.reveal = function(user) {
		$scope.name = user.name;
		$scope.address = user.address;
		$scope.phone = user.phone;
		$scope.website = user.website;
		$scope.company = user.company;
	};

});







