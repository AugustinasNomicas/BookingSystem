/// <reference path="../../../../typings/tsd.d.ts" />
import {ModalWindowController} from "./modalWindowController";

export class ModalWindowService {
    static $inject: string[] = ['$uibModal'];

    constructor(private $uibModal: angular.ui.bootstrap.IModalService) {

    }

    public show(title: string, body: string, confirmCallback, cancelCallback) {
        var modalSettings: angular.ui.bootstrap.IModalSettings = {
            templateUrl: '/app/shared/templates/modal-window.view.html',
            controller: ModalWindowController,
            controllerAs: 'vm',
            size: 'sm',
            resolve: {
                title: () => {
                    return title;
                },
                body: () => {
                    return body;
                }
            }
        };

        var modalInstance = this.$uibModal.open(modalSettings);
        
        modalInstance.result.then(
            // if any, execute confirm callback
            () => {
                if (confirmCallback != undefined) {
                    confirmCallback();
                }
            },
            // if any, execute cancel callback
            () => {
                if (cancelCallback != undefined) {
                    cancelCallback();
                }
            });
    }
 }
