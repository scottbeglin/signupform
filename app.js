angular.module('app', [])
    .directive('optIn', function () {
        return {
            templateUrl: 'opt-in.html',
            restrict: 'E',
            transclude: true
        };
    });
