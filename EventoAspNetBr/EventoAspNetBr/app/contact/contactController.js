(function () {
    'use strict';

    angular
        .module('app')
        .controller('contactController', ['contactService', function (contactService) {
            var vm = this;
            vm.model = {};
            vm.success = false;
            vm.isBusy = false;

            vm.submit = function () {
                vm.isBusy = true;

                contactService.send(vm.model).success(function (data) {
                    vm.success = data.success;
                    vm.isBusy = false;
                });
            };
        }]);
})();