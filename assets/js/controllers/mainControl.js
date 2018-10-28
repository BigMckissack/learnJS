appModule = angular.module('learnJS',[])
appModule.controller('mainController',['$scope', '$http', function($scope, $http){
	
	// You can set variables and functions on the scope, then use and display them in the html. 
	$scope.myName = 'Kyle';
	$scope.schoolPride = true;
	$scope.myHobbies = ['Running', 'Gaming', 'Coding'];
	

	$scope.changeSchoolPride = function(){
		$scope.schoolPride = !$scope.schoolPride;
	}


	// Here is an example of what our webapp is actually doing. We just call a route that we have setup using $http. 
	// This works for other web servers too! You can make calls to other sites and use their responses just this easily!
	let req = {
		method: 'GET',
		url: '/found',
		headers:{
			'Content-Type': 'application/json'
		}
	};
	$http(req).then(function(data){
		console.log(data);
	}).catch(function(ex){
		console.log(ex);
	});
}]);