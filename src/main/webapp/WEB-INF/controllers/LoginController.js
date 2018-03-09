app.controller("LoginController", function($scope, $http,appConfig,$compile,myFactory,$timeout) {
	var menuItems = myFactory.getMenuItems();
	$scope.userLogin = function() {
		
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
			$timeout(function(){setDefaultValues(response.data);},2000);
		}, function myError(response){
			$timeout(function(){redirecToLoginPage();},2000);
		});
	};
	
	function setDefaultValues(userDetails){
		 menuItems = [];
		//Setting default values to myFactory object so that we can use it anywhere in application
		myFactory.setUserFirstName(userDetails.userFirstName);
		myFactory.setUserLastName(userDetails.userLastName);
		myFactory.setEmailId(userDetails.emailId);
		myFactory.setMobileNo(userDetails.mobileNo);
		var role=userDetails.role;
		myFactory.setRole(role);
		if(role=="HR"){
			menuItems.push({"menu" : "MyDetails","icon" : "fa fa-indent fa-2x","path" : "views/details.html"});
			menuItems.push({"menu" : "EmpDetails","icon" : "fa fa-indent fa-2x","path" : "views/emp.html"});
			menuItems.push({"menu" : "AttendanceReport","icon" : "fa fa-indent fa-2x","path" : "views/attendance.html"});
			menuItems.push({"menu" : "MyProfileDetails","icon" : "fa fa-indent fa-2x","path" : "views/profile.html"});
			}
		else if(role=="Employee"){
			menuItems.push({"menu" : "MyDetails","icon" : "fa fa-indent fa-2x","path" : "views/details.html"});
			menuItems.push({"menu" : "MyProfileDetails","icon" : "fa fa-indent fa-2x","path" : "views/profile.html"});
			menuItems.push({"menu" : "My Project","icon" : "fa fa-indent fa-2x","path" : "views/project.html"});
			}
		
		myFactory.setMenuItems(menuItems);
		//Redirecting to home page after logging in successfully
		var element = document.getElementById('home');
		var path = "'views/home.html'";
		element.setAttribute("src", path);
		var newTemplate = angular.element(element);
		$('#home').html(newTemplate);
		$compile($('#home'))($scope)

	};
	
	function redirectToLoginPage(){
		menuItems = [];
		myFactory.setUserFirstName("");
		myFactory.setUserLastName("");
		myFactory.setEmailId("");
		myFactory.setMobileNo("");
		myFactory.setMenuItems(menuItems);
		var element = document.getElementById('home');
		var path = "'views/login.html'";
		element.setAttribute("src", path);
		var newTemplate = angular.element(element);
		$('#home').html(newTemplate);
		$compile($('#home'))($scope)
	}

});