(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuApp/template/items.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
