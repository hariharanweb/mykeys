'use strict';

/* Controllers */

var musicControllers = angular.module('musicControllers', []);

musicControllers.controller('musicController', ['$scope','$timeout', function($scope,$timeout){
  
	var whiteKeys = ["C1","D1","E1","F1","G1","A1","B1","C2","D2","E2","F2","G2","A2","B2","C3"];
	var blackKeys = ["C#1","D#1","F#1","G#1","Bb1","C#2","D#2","F#2","G#2","Bb2"];
	$scope.keys = _.union(whiteKeys,blackKeys);
	
	var currentIndex = 0;
	
	var keyPressingKeys = function(){
		$timeout(pressKeys, 1000);	
		
	}  
	
	var pressKeys = function(){
		if(currentIndex == $scope.keys.length) 
			currentIndex = 0;
		console.log("Press key "+$scope.keys[currentIndex++]);
		keyPressingKeys();
	}
	
	keyPressingKeys();
}]);