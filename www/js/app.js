// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var launcher = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'tpl/global/tabs.html'
  })

    .state('login', {
      url: '/login',
      templateUrl: 'tpl/login.html',
      controller: 'LoginCtrl'
    })

    .state('tab.dashboard', {
      url: '/dashboard',
      templateUrl: 'tpl/dashboard.html',
      controller: 'DashboardCtrl'
    })

    .state('tab.announceDetails', {
      url: '/details/:announceDetailsId',
      templateUrl: 'tpl/announce-details.html',
      controller: 'AnnounceDetailsCtrl'
    })

    .state('tab.localisation', {
      url: '/localisation',
      templateUrl: 'tpl/localisation.html',
      controller: 'LocalisationCtrl'

    })

    .state('tab.profile', {
    url: '/profile',
    templateUrl: 'tpl/profile.html',
    controller: 'ProfileCtrl'
    })

    .state('tab.favorite', {
      url: '/favorite',
      templateUrl: 'tpl/favorite.html',
      controller: 'FavoriteCtrl'

    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});


angular.module('starter.controllers', []);