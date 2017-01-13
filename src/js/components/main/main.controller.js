(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['ProductService'];

  function mainController(ProductService) {
    /*jshint validthis: true */
    this.product = ProductService.productArray;
    console.log(this.product);
  }

})();
