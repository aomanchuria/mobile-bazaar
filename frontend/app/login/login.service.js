(function() {
  'use strict';
  
  angular.module('mobile-bazaar.login')
  .service('LoginService', LoginService);
  
  LoginService.$inject = ['$http'];
  
  function LoginService($http) {
    var login = true;
    var APIURL = 'localhost:28469/api/login';
    
    return {
      Login: Login    
    };
    
    function Login(credentials) {
      console.log('Login Request Stubbed');
      console.log('Logging in with: ');
      console.log(credentials);
      return login; // Will return a callback after wiring $http
    }
    
  }
  
}());