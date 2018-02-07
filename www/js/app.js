// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'chart.js', 'ngAnimate'])

  .config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      chartColors: ['#33cd5f', '#ef473a', '#ffc900'],
      responsive: true,
      legend: { display: true },
      onAnimationComplete: function () {
        this.showTooltip(this.segments, true);
      }

    });
  }])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginController',
        onEnter: function ($state, $localstorage) {
          if($localstorage.getObject('logged') != null && $localstorage.getObject('logged') === true){
            $state.go('tab.references');
          }
        }
      })

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.references', {
        url: '/references',
        views: {
          'tab-references': {
            templateUrl: 'templates/tab-news.html',
            controller: 'NoticiasCtrl'
          }
        }
      })

      .state('tab.twitter', {
        url: '/twitter',
        views: {
          'tab-twitter': {
            templateUrl: 'templates/tab-twitter.html',
            controller: 'TwitterCtrl'
          }
        }
      })

      .state('tab.result', {
        url: '/result',
        views: {
          'tab-result': {
            templateUrl: 'templates/tab-result.html',
            controller: 'ResultCtrl'
          }
        }
      })

      .state('tab.result-detail', {
        url: '/result/detail',
        views: {
          'tab-result': {
            templateUrl: 'templates/tab-result-detail.html',
            controller: 'ResultDetailCtrl'
          }
        }
      })

      .state('tab.newspaper', {
        url: '/newspaper',
        views: {
          'tab-newspaper': {
            templateUrl: 'templates/tab-newspaper.html',
            controller: 'NewspaperCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  })
  .constant('SERVER', {
    // url: 'http://localhost:8000/'
    url: 'http://douglasnunes.webfactional.com/'
  });
