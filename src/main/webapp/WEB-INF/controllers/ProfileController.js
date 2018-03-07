app.controller("ProfileController", function($scope, $http,myFactory,appConfig,$window) {
	$scope.getRegisterDetails = function() {
		$http({
			method : "GET",
			url : appConfig.appUri + "profile/userprofile"
		}).then(function mySuccess(response) {
		}, function myError(response) {
			alert("!");
		});
	};
	
	
$scope.profiledetailes = function() {
		alert("profiledetailes");
		
		var record = {
			"emailId": $scope.emailId,
			"password": $scope.password
		};	

		var req = {
				method : 'POST',
				url :  appConfig.appUri + "profile/userprofile",
				headers : {
					"Content-type" : "application/json"
				},
				data : record
			}

			$http(req).then(function mySuccess(response) {
				$window.location.href='login/userprofile';
				$scope.records = [];
				$scope.userFirstName = myFactory.getUserFirstName();
				$scope.userLastName = myFactory.getUserLastName();
				$scope.mobileNo = myFactory.getMobileNo();
				$scope.emailId = myFactory.getEmailId();
			});
		};

	});