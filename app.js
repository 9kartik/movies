
var app = angular.module('app',['ui.bootstrap','ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  // 
  // For any unmatched url, redirect to /state1 
  $urlRouterProvider.otherwise("home");
  // 
  // Now set up the states 
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "index.html"
    })
    .state('home.list', {
      url: "/list",
      templateUrl: "views/movie_list.html",
      controller: 'ctrl as lister'
    })
    .state('home.graphs', {
      url: "/graphs",
      templateUrl: "views/movie_graphs.html",
	  controller: 'ctrl as grapher'
    });
});
angular.element(function() {
      angular.bootstrap(document, ['app']);
    });