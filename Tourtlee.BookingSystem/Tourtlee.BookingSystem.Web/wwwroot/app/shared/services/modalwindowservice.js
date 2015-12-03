/// <reference path="../../../../typings/tsd.d.ts" />
var modalWindowController = require("./modalwindowcontroller");
var ModalWindowService = (function () {
    function ModalWindowService($uibModal) {
        this.$uibModal = $uibModal;
    }
    ModalWindowService.prototype.show = function (title, body, confirmCallback, cancelCallback) {
        var modalSettings = {
            templateUrl: '/app/shared/templates/modal-window.view.html',
            controller: modalWindowController,
            controllerAs: 'vm',
            size: 'sm',
            resolve: {
                title: function () {
                    return title;
                },
                body: function () {
                    return body;
                }
            }
        };
        var modalInstance = this.$uibModal.open(modalSettings);
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
    ModalWindowService.$inject = ['$uibModal'];
    return ModalWindowService;
})();
module.exports = ModalWindowService;
