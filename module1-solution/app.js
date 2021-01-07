(function(){
'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter', '$injector'];

  function LunchCheckController($scope, $filter, $injector){

  $scope.list = "";
  $scope.answer = "";
  $scope.comment = "";
  $scope.comment2 = "";
  $scope.displayMessage = function(){
      var numOfItems = calcNumItems($scope.list);
    if (numOfItems==0) {
        $scope.answer = "Please enter data first";
        $scope.style = "color:red; border:2px solid red; text-align: center;";
      }else if (numOfItems<4) {
        $scope.answer = "enjoy";
        $scope.style = "color:green; border:2px solid green; text-align: center;";
    }else {
      $scope.answer = "too much";
      $scope.style = "color:green; border:2px solid green; text-align: center;";
    }
    };

    function calcNumItems(string){
    // count how many items are put into input
    var totalNumItems = 0;
    var array = string.split(',');
    for (var i = 0; i < array.length; i++) {
    if (array[i].trim()!="") {
      totalNumItems++;
    //  $scope.comment = "";
    }else{
      if (i==0 || (totalNumItems<array.length && i != array.length-1)) {
      $scope.comment = "Sorry, but my programme do NOT consider an empty item!";
    }
  }
  for (var j = 0; j < i; j++) {
      if (array[j].trim() == array[i].trim() && array[j].trim() != ""){
      $scope.comment2 = "Sorry, but you have already mentioned " + array[i] + ". I will not count it!";
      totalNumItems--;
    }
    // console.log("j =" + j + "; i =" + i);
  }
//    console.log("array[" + i + "]=" + array[i] + " : " + totalNumItems + "; the full length of the array =" + array.length);


    }

    return totalNumItems;
    };

}


})();
