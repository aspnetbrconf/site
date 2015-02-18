(function () {
    'use strict';

    angular.module('app').factory('contactService', ['$http', function ($http) {
        return {
            send : function(data) {
                return $http.post('api/contact', data);
            }
        };
    }]);

})();