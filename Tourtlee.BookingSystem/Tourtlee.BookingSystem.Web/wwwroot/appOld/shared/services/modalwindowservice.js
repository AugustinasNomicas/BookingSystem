/// <reference path="../../../../typings/tsd.d.ts" />
var modalWindowService = (function () {
    function modalWindowService($modal) {
        this.$modal = $modal;
    }
    modalWindowService.prototype.show = function (title, msg, confirmCallback, cancelCallback) {
        var modalSettings = {
            templateUrl: '/app/shared/templates/modal-window.view.html',
            controller: this.modalWindowController,
            size: 'sm',
            resolve: {
                title: function () {
                    return title;
                },
                body: function () {
                    return msg;
                }
            }
        };
        var modalInstance = this.$modal.open(modalSettings);
        modalInstance.result.then(
        // if any, execute confirm callback
        function () {
            if (confirmCallback != undefined) {
                confirmCallback();
            }
        }, 
        // if any, execute cancel callback
        function () {
            if (cancelCallback != undefined) {
                cancelCallback();
            }
        });
    };
    // Internal controller used by the modal window
    modalWindowService.prototype.modalWindowController = function ($scope, $modalInstance, title, body) {
        $scope.title = "";
        $scope.body = "";
        // If specified, fill window title and message with parameters
        if (title) {
            $scope.title = title;
        }
        if (body) {
            $scope.body = body;
        }
        $scope.confirm = function () {
            $modalInstance.close();
        };
        $scope.cancel = function () {
            $modalInstance.dismiss();
        };
    };
    ;
    modalWindowService.$inject = ['$modal'];
    return modalWindowService;
})();
module.exports = modalWindowService;
