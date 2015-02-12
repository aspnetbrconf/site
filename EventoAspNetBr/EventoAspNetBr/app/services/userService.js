(function () {
    'use strict';

    var serviceId = 'userService';
    angular.module('app').factory(serviceId, ['common', '$http', '$route', userService]);

    function userService(common, $http) {

        var urlBase = '/users';

        var service = {
            getUsers: getUsers,
            getUser: getUser,
            createUser: createUser,
            updateUser: updateUser,
            deleteUser: deleteUser,
            generateLinkExcelToDownload: generateLinkExcelToDownload
        };

        function getUsers(name, email, fields, offset, limit, successCallBack, errorCallBack) {
            return $http.get(global.service + urlBase +
                '?name=' + name +
                '&email=' + email +
                //'&active=' + active +
                '&fields=' + fields +
                '&offset=' + offset +
                '&limit=' + limit, { tracker: 'busy-searchusers' })
                .success(successCallBack)
                .error(errorCallBack);
        }

        function getUser(id, fields, successCallBack, errorCallBack) {
            return $http.get(global.service + urlBase +
                '?id=' + id +
                '&fields=' + fields, { tracker: 'busy-searchusers' })
                .success(successCallBack)
                .error(errorCallBack);
        }

        function createUser(user, successCallBack, errorCallBack) {
            return $http.post(global.service + urlBase, user, { tracker: 'busy-searchusers' })
                .success(successCallBack)
                .error(errorCallBack);
        }      
       
        function updateUser(id, user, successCallBack, errorCallBack) {
            return $http.put(global.service + urlBase + '/' + id, user, { tracker: 'busy-searchusers' })
                .success(successCallBack)
                .error(errorCallBack);
        }

        function deleteUser(id, successCallBack, errorCallBack) {
            return $http.delete(global.service + urlBase + '/' + id, { tracker: 'busy-searchusers' })
                 .success(successCallBack)
                .error(errorCallBack);
        }

        function generateLinkExcelToDownload() {
            return global.service + '/Export' + urlBase;
        }

        return service;
    }
}
)();