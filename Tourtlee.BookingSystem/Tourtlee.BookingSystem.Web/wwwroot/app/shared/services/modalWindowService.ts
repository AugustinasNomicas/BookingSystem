/// <reference path="../../../../typings/tsd.d.ts" />

import modalWindowController = require("./modalwindowcontroller");

class modalWindowService {
    static $inject: string[] = ['$modal'];

    constructor(private $modal: angular.ui.bootstrap.IModalService) {

    }

    public show(title: string, msg: string, confirmCallback, cancelCallback) {
        var modalSettings: angular.ui.bootstrap.IModalSettings = {
            templateUrl: '/app/shared/templates/modal-window.view.html',
            controller: modalWindowController,
            size: 'sm',
            resolve: {
                title: () => {
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
    }
 }

export = modalWindowService