app.controller("headerController",function($scope, myFactory, $compile, $mdDialog, $timeout){
	$scope.userFirstName= myFactory.getUserFirstName();
	$scope.userLastName = myFactory.getUserLastName();
	$scope.emailId = myFactory.getEmailId();
	$scope.mobileNo = myFactory.getMobileNo();
	
	$scope.logout = function() {
		
	    
		//Clear if any values set to factory
		var menuItems = [];
		myFactory.setUserFirstName("");
		myFactory.setUserLastName("");
		myFactory.setEmailId("");
		myFactory.setMobileNo("");
		myFactory.setMenuItems(menuItems);
		myFactory.setTemplateUrl("");

		
		$timeout(function(){redirectToLoginPage();},2000);
		
	}
	
	function redirectToLoginPage(){
		var element = document.getElementById('home');
		var path = "'views/login.html'";
		element.setAttribute("src", path);
		var newTemplate = angular.element(element);
		$('#home').html(newTemplate);
		$compile($('#home'))($scope);
		$mdDialog.hide();
	}
	
	
	
});