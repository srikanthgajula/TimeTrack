app.controller("ProjectController", function($scope, $http,myFactory) {
	$scope.project= myFactory.getProject();
	
});