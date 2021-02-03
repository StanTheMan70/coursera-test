(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
// here we need to connect our server

 function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
  //  console.log('im inside getAllCategories');
    return $http({
    method: 'GET',
    url: 'https://davids-restaurant.herokuapp.com/categories.json'
  }).then(
      function(promise){
          return promise.data;
      });

    };


  service.getItemsForCategory = function(categoryShortName){
    console.log('im inside getItemsForCategory');
    console.log(categoryShortName.itemId);
    var url = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName.itemId;
    return $http({
      method: 'GET',
      url: url,
      }).then(function(response){
      return response.data;
    });
  };
 }

})();
