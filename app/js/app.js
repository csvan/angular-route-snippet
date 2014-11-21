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

    .controller('View1Ctrl', ['$scope', function ($scope) {
        $scope.onClick = function () {
            alert('Clicked!')
        }
    }])

    .controller('View2Ctrl', [function () {

    }]);