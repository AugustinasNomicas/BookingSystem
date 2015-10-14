/// <reference path="../../../../typings/tsd.d.ts" />

class modalWindowService {
    static $inject: string[] = ['$modal'];

    constructor(private $modal: angular.ui.bootstrap.IModalService) {

    }

    public show(title: string, msg: string, confirmCallback, cancelCallback) {
        var modalSettings: angular.ui.bootstrap.IModalSettings = {
            templateUrl: '/app/shared/templates/modal-window.view.html',
            controller: this.modalWindowController,
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

    // Internal controller used by the modal window
    private modalWindowController($scope, $modalInstance, title, body) {
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
    
}

export = modalWindowService