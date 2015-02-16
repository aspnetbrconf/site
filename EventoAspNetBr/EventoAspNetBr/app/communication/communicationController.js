(function () {
    'use strict';

    angular
        .module('app')
        .controller('communicationController', ['communicationService', function (communicationService) {
            var vm = this;
            vm.model = {};
            vm.success = false;

            vm.submit = function () {
                communicationService.send(vm.model).success(function (data) {
                    vm.success = data.success;
                });
            };
        }]);
})();