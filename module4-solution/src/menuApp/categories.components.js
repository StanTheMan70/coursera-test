(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuApp/template/categories.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
