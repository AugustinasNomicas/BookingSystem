/// <reference path="../../../../typings/tsd.d.ts" />
var modalWindowController = require("./modalwindowcontroller");
var modalWindowService = (function () {
    function modalWindowService($modal) {
        this.$modal = $modal;
    }
    modalWindowService.prototype.show = function (title, msg, confirmCallback, cancelCallback) {
        var modalSettings = {
            templateUrl: '/app/shared/templates/modal-window.view.html',
            controller: modalWindowController,
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
    modalWindowService.$inject = ['$modal'];
    return modalWindowService;
})();
module.exports = modalWindowService;
