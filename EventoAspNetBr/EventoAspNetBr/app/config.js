(function () {
    'use strict';

    var app = angular.module('app');

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                title: 'ASP.NET Brasil Conference',
                templateUrl: 'app/pages/static/home.html',
                controller: 'pageController'
            })
            .otherwise({ redirectTo: '/' });
    }]);


    //app.config(['$provide', function ($provide) {
    //    $provide.decorator('$exceptionHandler',
    //        ['$delegate', 'config', 'logger', function ($delegate, config, logger) {
    //            var appErrorPrefix = config.appErrorPrefix;
    //            var logError = logger.getLogFn('app', 'error');
    //            return function (exception, cause) {
    //                $delegate(exception, cause);
    //                if (appErrorPrefix && exception.message.indexOf(appErrorPrefix) === 0) { return; }

    //                var errorData = { exception: exception, cause: cause };
    //                var msg = appErrorPrefix + exception.message;
    //                logError(msg, errorData, true);
    //            };
    //        }]);
    //}]);

})();
    
