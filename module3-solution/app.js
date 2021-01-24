(function(){
'use strict';

  angular.module('NarrowItDownAPP', [])

  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItems);

function FoundItems(){
  var ddo = {
templateUrl: 'foundItem.html'
// scope: {
//   menu: '=foundItems'
// }
  };
  return ddo;
}

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var menu = this;

menu.itemName = "";

menu.removeItem = function(itemIndex){
  menu.items.splice(itemIndex, 1);
};

  menu.getMenu = function(){
    if (menu.items) {menu.items.length = 0;}
menu.status = false;
if(menu.itemName.trim()!="") {
    var promise = MenuSearchService.getMatchedMenuItems(menu.itemName);
    promise.then(function(responce){
  //    console.log("found this: " + responce.name[0] + "; " + responce.short_name[0] + "; " + responce.description[0]);
  menu.items = responce;
  menu.message = "";
  if(menu.items.length>0){
    menu.status = true;
  }else{
  menu.message = "Nothing found";
  };
  //console.log(menu.items);

    })
    .catch(function(error){
    console.log(error);
    })
}else{

  menu.message = "Nothing found";
  //console.log(menu.message);
}
  };
    };




MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
    var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    searchTerm = searchTerm.toLowerCase();
    var foundItems;
  return $http({
  method:"GET",
  url:(ApiBasePath + "/menu_items.json"),
  })
.then(function(result){
    var fullMenu = result.data;
    var foundItems = new Array();
    var i = 0;
    angular.forEach(fullMenu.menu_items, function(){
    var temp = fullMenu.menu_items[i];
    var name = temp.name.toLowerCase();
    var short_name = temp.short_name.toLowerCase();
    var description = temp.description.toLowerCase();
    i++;
      if(name.includes(searchTerm) || short_name.includes(searchTerm) || description.includes(searchTerm)){
        foundItems.push(temp);
        // console.log("found this" + name + ";" + short_name + ":" + description);
      }
      });

  //  console.log(foundItems);
  //  var foundItems;
    return foundItems;
  });
    };

  };

})();
