// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('chat', ['ionic', 'chat.controllers', 'chat.services', 'ngCordova.plugins.camera']);

angular.module('chat').run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

angular.module('chat').config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    $stateProvider.state('app.chat', {
        url: "/chat",
        views: {
            'menuContent': {
                templateUrl: "templates/chat.html",
                controller: 'ChatCtrl'
            }
        }
    })

    $stateProvider.state('app.speakers', {
        url: "/speakers",
        views: {
            'menuContent': {
                templateUrl: "templates/speakers.html",
                controller: 'SpeakersCtrl'
            }
        }
    })

    $stateProvider.state('app.speaker', {
        url: "/speakers/:speakerId",
        views: {
            'menuContent': {
                templateUrl: "templates/speaker.html",
                controller: 'SpeakerCtrl'
            }
        }
    })

    $stateProvider.state('app.drifters', {
        url: "/drifters",
        views: {
            'menuContent': {
                templateUrl: "templates/drifters.html",
                controller: 'DriftersCtrl'
            }
        }
    })

    $stateProvider.state('app.drifter', {
        url: "/drifters/:drifterId",
        views: {
            'menuContent': {
                templateUrl: "templates/drifter.html",
                controller: 'DrifterCtrl'
            }
        }
    })

    $stateProvider.state('app.sessions', {
        url: "/sessions",
        views: {
            'menuContent': {
                templateUrl: "templates/sessions.html",
                controller: 'SessionsCtrl'
            }
        }
    });

    $stateProvider.state('app.session', {
        url: "/sessions/:sessionId",
        views: {
            'menuContent': {
                templateUrl: "templates/session.html"
            }
        }
    });
    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/chat');
})

angular.module('chat').filter('timeAgo', function () {
    return function (date) {
        if (!date) return;
        return moment(date, 'x').fromNow();
    }
})