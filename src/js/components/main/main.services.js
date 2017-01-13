(function() {
  'use strict'

  angular
    .module('myApp.service.stock', [])
    .service('ProductService', ProductService);

    function ProductService() {
      this.productArray = [{
        id: 1,
        name: 'Five Guys',
        description: 'Hamburger joint with peanuts.',
        location: 'Denver',
        rating: 3,
        comments:
          {
            reviewer: 'Gina',
            oneRating: 3,
            comment: 'Smells like fish!'
          }
      },
      {
        id: 2,
        name: 'Hamburger Stand',
        description: 'Hamburgers + hotdogs!',
        location: 'Denver',
        rating: 0,
        comments:
          {
            reviewer: 'Akiko',
            oneRating: 0,
            comment: 'Grrosssss!'
          }
      }]
    }
})();
