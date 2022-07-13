(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.list = "";
  $scope.stateOfBeing = "hungry";

  $scope.split = function () {
    $scope.test = $scope.list.split(",");
    $scope.count = "";
    for (let x in $scope.test) {
        $scope.count += $scope.test[x];
}
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
