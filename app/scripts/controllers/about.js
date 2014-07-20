'use strict';

/**
 * @ngdoc function
 * @name d8cApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the d8cApp
 */
angular.module('d8cApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
