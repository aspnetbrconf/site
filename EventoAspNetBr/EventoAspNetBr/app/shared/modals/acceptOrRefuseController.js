angular.module('app').controller('acceptOrRefuseController', acceptOrRefuseController);

function acceptOrRefuseController($scope, $modal, $modalInstance, items) {

    $scope.title = items.title;
    $scope.message = items.message;
    if (items.extraMessage) {
        $scope.extraMessage = items.extraMessage;
    }
    else {
        $scope.extraMessage = "";
    }

    $scope.ok = function () {
        $modalInstance.close({ ok: true });
    };

    $scope.cancel = function () {
        $modalInstance.close({ ok: false });
    };
};
