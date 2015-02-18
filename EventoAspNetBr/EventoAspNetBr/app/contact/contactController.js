(function () {
    'use strict';

    angular
        .module('app')
        .controller('contactController', ['contactService', function (contactService) {
            var vm = this;
            vm.model = {};
            vm.success = false;

            vm.submit = function () {
                contactService.send(vm.model).success(function (data) {
                    vm.success = data.success;
                });
            };
        }]);
})();