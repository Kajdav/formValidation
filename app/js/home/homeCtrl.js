var app = angular.module('devSocial');

app.controller('homeCtrl', function($scope) {
	$scope.showLogin = false;
	$scope.showSignup = false;
	$scope.loginClick = false;
	$scope.toggleShowLogin = function() {
		$scope.showLogin = true;
		$scope.showSignup=false;
		$scope.signupClick = false;
	}
	$scope.toggleShowSignup = function() {
		$scope.showSignup = true;
		$scope.showLogin = false;
		$scope.loginClick = false;
		$scope.inputEmail = '';
		$scope.inputPassword = '';
	}

})