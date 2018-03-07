//var app= angular.module('TimeTrack',['ngRoute']);
app.controller("RegisterController", function($scope, $http,appConfig) {
	
	$scope.getRegisterDetails = function() {
		$http({
			method : "GET",
			url : appConfig.appUri + "register/saveUserDetails"
		}).then(function mySuccess(response) {
		}, function myError(response) {
			alert("!");
		});
	};

	$scope.userRegistration = function() {
		var record = {
			"userFirstName" : $scope.userFirstName,
			"userLastName" : $scope.userLastName,
			"mobileNo" : $scope.mobileNo,
			"emailId": $scope.emailId,
			"password":$scope.password
		};	


		var req = {
			method : 'POST',
			url :  appConfig.appUri + "register/saveUserDetails",
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