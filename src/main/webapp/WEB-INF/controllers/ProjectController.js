app.controller("ProjectController", function($scope, $http,myFactory) {
	$scope.project= myFactory.getProject();
	$scope.status= myFactory.getStatus();
});