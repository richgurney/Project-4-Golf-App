angular
.module('golf-app', ['ngResource', 'angular-jwt', 'ui.router'])
  .constant('API', 'http://localhost:3000/api')
  .config(MainRouter)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor');
  });

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function MainRouter($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "/mainApp/states/home.html",
  })
  .state('register', {
    url: "/register",
    templateUrl: "/mainApp/states/register.html",
  }) 
  .state('login', {
    url: "/login",
    templateUrl: "/mainApp/states/login.html",
  })
  .state('loggedIn', {
    url: "/loggedIn",
    templateUrl: "/mainApp/states/loggedIn.html",
  })
  .state('tournaments', {
    url: "/tournaments",
    templateUrl: "/mainApp/states/tournaments.html",
  })

 
  $urlRouterProvider.otherwise('/');
}