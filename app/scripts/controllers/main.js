'use strict';

/**
 * @ngdoc function
 * @name d8cApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the d8cApp
 */
angular.module('d8cApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
