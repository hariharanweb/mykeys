'use strict';

/* Controllers */

var musicControllers = angular.module('musicControllers', []);

musicControllers.controller('musicController', ['$scope','$timeout', function($scope,$timeout){
  
	var whiteKeys = ["C1","D1","E1","F1","G1","A1","B1","C2","D2","E2","F2","G2","A2","B2","C3"];
	var blackKeys = ["Csharp1","Dsharp1","Fsharp1","Gsharp1","Bb1","Csharp2","Dsharp2","Fsharp2","Gsharp2","Bb2"];
	$scope.keys = _.union(whiteKeys,blackKeys);
	
	var currentIndex = 0;
	
	var keyPressingKeys = function(){
		$timeout(pressKeys, 1000);	
		
	}  
	
	var pressKeys = function(){
		if(currentIndex == $scope.keys.length) 
			currentIndex = 0;
			
			console.log($scope.keys[currentIndex]);
			
			_.each($('.black'), function(key){
				key.style.fill = "black";
			});
			_.each($('.white'), function(key){
				key.style.fill = "white";
			});			
			$('.'+$scope.keys[currentIndex])[0].style.fill = "yellow";
			currentIndex++;
		 	keyPressingKeys();
	}
	

	
	keyPressingKeys();
}]);