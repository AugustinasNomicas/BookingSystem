/// <reference path="../../../../typings/tsd.d.ts" />
var modalWindowController_1 = require("./modalWindowController");
var ModalWindowService = (function () {
    function ModalWindowService($uibModal) {
        this.$uibModal = $uibModal;
    }
    ModalWindowService.prototype.show = function (title, body, confirmCallback, cancelCallback) {
        var modalSettings = {
            templateUrl: '/app/shared/templates/modal-window.view.html',
            controller: modalWindowController_1.ModalWindowController,
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
exports.ModalWindowService = ModalWindowService;
