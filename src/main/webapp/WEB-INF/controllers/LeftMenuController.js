app.controller("leftmenuController",function($scope, myFactory, $compile){
	$scope.userFirstName= myFactory.getUserFirstName();
	$scope.userLastName = myFactory.getUserLastName();
	$scope.emailId = myFactory.getEmailId();
	$scope.mobileNo = myFactory.getMobileNo();
	$scope.menuItems = myFactory.getMenuItems();
	
	$scope.setTemplateUrl = function(path){
		var element = document.getElementById('main');
		path = "'"+path+"'";
		element.setAttribute("ng-include", path);
		var newTemplate = angular.element(element);
		$('#main').html(newTemplate);
		$compile($('#main'))($scope)
	}
});