(function(){
'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope){
$scope.name = "Stanislav";
$scope.sayHello = function(){
  return "Hello Coursera!";
};
  });
})();
