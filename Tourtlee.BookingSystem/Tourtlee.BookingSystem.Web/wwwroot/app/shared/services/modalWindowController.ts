class modalWindowController {
    static $inject: string[] = ['$scope', '$modalInstance'];
    constructor($scope, $modalInstance, title, body) {
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

export = modalWindowController;