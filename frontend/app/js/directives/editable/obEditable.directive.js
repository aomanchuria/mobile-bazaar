(function() {
  'use strict';
  
  angular
    .module('mobile-bazaar.directives')
    .directive('obEditable', obEditable);

  function obEditable() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'views/obEditable.template.html',
      scope: {
          heading: '@',
          data: '=',
      },
      controller: DirectiveController,
      controllerAs: 'vm',
      bindToController: true,
      link: link
    };

    return directive;
    
    function link(scope, element, attrs) {
      console.log(element);
      console.log(attrs);
    }
  }

  function DirectiveController($window) {
    var vm = this;
    vm.editing = false;    
    
    vm.hideButtons = function() {
      vm.editing = false;
    }
    
    vm.setFocus = function() {
      //var el = $window.document.getElementById(vm.heading);
      var el = angular.element(document.querySelector('#' + vm.heading));
      console.log(el[0]);
      if (el) {
        el[0].focus();
      }
    }
    
    vm.showButtons = function() {
      vm.editing = true;
      vm.setFocus();
    }
    
  }
}());