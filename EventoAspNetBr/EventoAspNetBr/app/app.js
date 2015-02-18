(function () {
    'use strict';

    var app = angular.module('app', [
        'ngRoute',
        'ui.bootstrap'
    ]);

    app.run(['$rootScope', '$route', '$location',
        function ($rootScope, $route, $location) {
        }]);
})();

