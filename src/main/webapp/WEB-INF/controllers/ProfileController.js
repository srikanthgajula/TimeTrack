app.controller("ProfileController", function($scope, $http,myFactory) {
	$scope.userFirstName= myFactory.getUserFirstName();
	$scope.userLastName = myFactory.getUserLastName();
	$scope.emailId = myFactory.getEmailId();
	$scope.mobileNo = myFactory.getMobileNo();
	
	$scope.refreshPage = function(){
			alert(myFactory.getEmailId());
			$http({
				method : "GET",
				url : appConfig.appUri + "user/profile/getUserProfile?=" + myFactory.getEmailId()
			}).then(function mySuccess(response) {
				alert("success");
				$scope.userFirstName = response.data.userFirstName;
				$scope.userLastName = response.data.userLastName;
				$scope.emailId = response.data.emailId;
				$scope.mobileNo =  response.data.mobileNo;
			}, function myError(response) {
				alert("!error");
			});
		};
	});