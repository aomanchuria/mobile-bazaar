(function() {
  'use strict';
  
  angular.module('mobile-bazaar.listing')
  .controller('ListingController', ListingController);
  
  ListingController.$inject = ['ListingService'];
  
  function ListingController(ListingService) {
    var vm = this;
    
    vm.categories = [];
    vm.discoverTags = [];
    
    vm.types = [
      'Physical Item',
      'Digital Item',
      'Service'
    ];
    
    vm.countries = [
      'United States',
      'Canada',
      'Mexicon'
    ]
    
  }
}());