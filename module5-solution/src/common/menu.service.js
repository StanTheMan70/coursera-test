(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (shortName) {
//    var config = {};
//    if (shortName) {
//      config.params = { category: shortName };
//    }
//    console.log("Request: ", ApiPath + '/menu_items/' + shortName.toUpperCase() + '.json');
  //  return $http.get(ApiPath + '/menu_items/' + shortName.trim().toUpperCase() + '.json').then(function (response) {
  return $http.get(ApiPath + '/menu_items.json').then(function (response) {
    //console.log(response.data);
    var temp = response.data.menu_items;
  //  console.log(temp);
    var favorite;
    for (var i = 0; i < temp.length; i++) {
    //  console.log(temp[i].short_name);
      if (temp[i].short_name == shortName.trim().toUpperCase()) {
    //    console.log("found coinsidence " + temp[i].short_name);
        favorite = temp[i];
    //    console.log(favorite);
      }


    }
      // return response.data;
      return favorite;
    });
  }
}
})();




// (function () {
// "use strict";
//
// angular.module('common')
// .service('MenuService', MenuService);
//
//
// MenuService.$inject = ['$http', 'ApiPath'];
// function MenuService($http, ApiPath) {
//   var service = this;
//   // var cat;
//
//   service.getCategories = function () {
//     return $http.get(ApiPath + '/categories.json').then(function (response) {
//   // var  cat = response.data;
//   //    console.log("recieve categiries");
//     console.log(cat);
//       return response.data;
//     });
//   };
//
//   service.pushData = function (name, lastName, email, phone, favorite){
//     var data = {
//       name: name,
//       lastName: lastName,
//       email: email,
//       phone: phone,
//       favorite: favorite
//     };
//     //console.log(data);
//   };
//
//
//   service.getMenuItems = function (category) {
//     var config = {};
//     if (category) {
//       config.params = {'category': category};
//     }
//
//     return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
//       return response.data;
//     });
//   };
//
//   service.validateFavorites = function (shortName) {
//   //  if (shortName == undefined) {return false};
//   //  console.log("var cat inside validate is " + cat);
//
// //       if (cat == undefined){
// //     return service.getCategories().then(function(){returnForValidation()});
// //   }else{
// //     returnForValidation();
// // };
//
//      // function returnForValidation(){
//      console.log(cat.length);
//       for (var i = 0; i < cat.length; i++) {
//       var name = cat[i].short_name;
//     console.log(cat[i].name);
//     console.log(name);
//       name = name.toLowerCase();
//       var favorite = shortName.trim().toLowerCase();
//       if (name == favorite) {
//         console.log("i return true");
//         //var answer = "true";
//         return true;
//       };
//     };
//     console.log("i return false");
//     //var answer = "false";
//     return false;
//
//
//   };
//
//
//
//
// }
//
//
//
// })();
