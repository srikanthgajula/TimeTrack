app.controller("ProfileController", function($scope, $http, myFactory,
		appConfig) {
	$scope.userFirstName = myFactory.getUserFirstName();
	$scope.userLastName = myFactory.getUserLastName();
	$scope.emailId = myFactory.getEmailId();
	$scope.mobileNo = myFactory.getMobileNo();
	$scope.project = myFactory.getProject();
	$scope.status = myFactory.getStatus();
	alert("status" +$scope.status);
	$scope.refreshPage = function() {

		$http(
				{
					method : "GET",
					url : appConfig.appUri + "user/profile/getUserProfile?="
							+ myFactory.getEmailId()
				}).then(function mySuccess(response) {
			$scope.userFirstName = response.data.userFirstName;
			$scope.userLastName = response.data.userLastName;
			$scope.emailId = response.data.emailId;
			$scope.mobileNo = response.data.mobileNo;
			$scope.project = response.data.project;
			$scope.status = response.data.status;
			alert("status" +$scope.status);
		}, function myError(response) {

		});
	};
});