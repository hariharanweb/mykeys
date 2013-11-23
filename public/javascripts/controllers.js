'use strict';

/* Controllers */

var musicControllers = angular.module('musicControllers', []);

musicControllers.controller('musicController', ['$scope', 
  function($scope) {
    $scope.title = "hello world";
  }
]);