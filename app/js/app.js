'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'views/view1.html',
            controller: 'View1Ctrl'
        });
        $routeProvider.when('/view2', {
            templateUrl: 'views/view2.html',
            controller: 'View2Ctrl'
        });
        $routeProvider.otherwise({redirectTo: '/view1'});
    }])

    .controller('View2Ctrl', [function () {

    }])

    .controller('View1Ctrl', [function () {

    }]);