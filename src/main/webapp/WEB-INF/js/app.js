var app = angular.module(
		"timeTrackApp",
		[ "ngRoute", "ngCookies", "ui.grid", "ui.grid.pagination",
				"ngMaterial", "ui.bootstrap" ]).config(
		function($mdDateLocaleProvider) {
			$mdDateLocaleProvider.formatDate = function(date) {
				var day = date.getDate();
				var month = date.getMonth() + 1;
				var year = date.getFullYear();
				return year + '-' + (month < 10 ? "0" + month : month) + '-'
						+ (day < 10 ? "0" + day : day);
			};
		});

// TODO: Replace this appUri with the domain name created
app.constant('appConfig', {
	appName : "TimeTrack",
	appUri : "http://localhost:8181/TimeTrack/",
	version : "1.0",
	empStartId : 16001,
	empEndId : 16999
});

app.factory('myFactory', function() {
	var userFirstName = "";
	var userLastName = "";
	var mobileNo = "";
	var emailId = "";
	var password = "";
	var role = "";
	var project = "";
	var menuItems=[];
var templateUrl="";

	function setUserFirstName(fName) {
		userFirstName = fName;
	}
	function getUserFirstName() {
		return userFirstName;
	}

	function setUserLastName(lName) {
		userLastName = lName;
	}
	function getUserLastName() {
		return userLastName;
	}
	function setMobileNo(no) {
		mobileNo = no;
	}

	function getMobileNo() {
		return mobileNo;
	}

	function setEmailId(email) {
		emailId = email;
	}
	function getEmailId() {
		return emailId;
	}
	function setPassword(pass) {
		password = pass;
	}
	function getPassword() {
		return password;
	}
	function setRole(rol) {
		role = rol;
	}
	function getRole() {
		return role;
	}
	function setProject(proj) {
		project = proj;
	}
	function getProject() {
		return project;
	}
	
    function setMenuItems(menu) {
		menuItems = menu;
	}

	function getMenuItems() {
		return menuItems;
	}
	function setTemplateUrl(url) {
		templateUrl = url;
	}

	function getTemplateUrl() {
		return templateUrl;
	}

	return {
		setUserFirstName : setUserFirstName,
		getUserFirstName : getUserFirstName,
		setUserLastName : setUserLastName,
		getUserLastName : getUserLastName,
		setMobileNo : setMobileNo,
		getMobileNo : getMobileNo,
		setEmailId : setEmailId,
		getEmailId : getEmailId,
		setPassword : setPassword,
		getPassword : getPassword,
		setMenuItems : setMenuItems,
		getMenuItems : getMenuItems,
		setTemplateUrl : setTemplateUrl,
		getTemplateUrl : getTemplateUrl,
		
		setRole : setRole,
		getRole : getRole,
		
		setProject : setProject,
		getProject : getProject


	}

});
