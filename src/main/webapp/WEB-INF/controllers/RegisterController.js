//var app= angular.module('TimeTrack',['ngRoute']);
app.controller("RegisterController", function($scope, $http, appConfig) {

	$scope.getProjects = function() {
		$http({
			method : "GET",
			url : appConfig.appUri + "/user/project/getProjects"
		}).then(function mySuccess(response) {
			$scope.projectsList = response.data;
			}, function myError(response) {
			alert("!" + response.data);
		});
	};
	$scope.getEmployeeDetails = function() {
		$http({
			method : "GET",
			url : appConfig.appUri + "/user/emp/getEmployeeDetails"
		}).then(function mySuccess(response) {
			$scope.userDetailsList = response.data;
		}, function myError(response) {
			alert("!" + response.data);
		});
	};

	$scope.userRegistration = function() {
		var record = {
			"userFirstName" : $scope.userFirstName,
			"userLastName" : $scope.userLastName,
			"mobileNo" : $scope.mobileNo,
			"emailId" : $scope.emailId,
			"password" : $scope.password,
			"project" : $scope.project,
			"status" : $scope.status
		};

		var req = {
			method : 'POST',
			url : appConfig.appUri + "register/saveUserDetails",
			headers : {
				"Content-type" : "application/json"
			},
			data : record
		}

		$http(req).then(function mySuccess(response) {
			alert(response);
		});
	};

});