(function(){
'use strict';

  angular.module('ShoppingListCheckOff', [])

  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListService', ShoppingListService);



  ToBuyController.$inject = ['ShoppingListService'];
  function ToBuyController(ShoppingListService){
    var toBuy = this;
    toBuy.items = ShoppingListService.getItems();
    toBuy.removeItem = function(itemIndex){
    ShoppingListService.removeItem(itemIndex);
    };
  };


AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService){
  var alreadyBought = this;
  alreadyBought.items = ShoppingListService.getBoughtItems();
};

  function ShoppingListService(){
    var service = this;
    var bought = [];
    var buy = [
    {
      name: "Cookies",
      quantity: "10",
    },
    {
      name: "Chips",
      quantity: "5",
    },
    {
      name: "Cacke",
      quantity: "7",
    },
    {
      name: "Milk",
      quantity: "2",
    },
    {
      name: "Donuts",
      quantity: "50",
    },
    {
      name: "Chocolate",
      quantity: "15",
    },
    {
      name: "Peanut Butter",
      quantity: "3",
    },
    {
      name: "Pepto Bismol",
      quantity: "2",
    },
    {
      name: "Vine",
      quantity: "2",
    },
    {
      name: "Salt",
      quantity: "1",
    }
    ];


    service.getItems = function(){
      return buy;
    };

    service.getBoughtItems = function(){
      return bought;
    };

    service.removeItem = function(itemIndex){
      bought.push(buy[itemIndex]);
      buy.splice(itemIndex, 1);
    };
  };

})();
