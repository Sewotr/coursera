(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Sewotr";
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    return "Yaakov likes to eat healthy snack at night!";
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
