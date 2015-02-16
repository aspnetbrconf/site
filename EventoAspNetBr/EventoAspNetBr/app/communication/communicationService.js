(function () {
    'use strict';

    angular.module('app').factory('communicationService', ['$http', function ($http) {
        return {
            send : function(data) {
                return $http.post('api/communication', data);
            }
        };
    }]);

})();