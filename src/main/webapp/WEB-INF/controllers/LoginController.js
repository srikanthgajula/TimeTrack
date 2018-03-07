app.controller("LoginController", function($scope, $http,appConfig,$window) {

	$scope.userLogin = function() {
		
		alert("userLogin");
		var record = {
			"emailId": $scope.emailId,
			"password":$scope.password
		};	


		var req = {
			method : 'POST',
			url :  appConfig.appUri + "login/validateLogin",
			headers : {
				"Content-type" : "application/json"
			},
			data : record
		}

		$http(req).then(function mySuccess(response) {
			alert(response);
			$window.location.href="login/userprofile";
		});
	};

});