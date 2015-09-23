/// <reference path="../../../../../../typings/tsd.d.ts" />
'use strict';
var vCellEditorController = (function () {
    function vCellEditorController($scope) {
        this.$scope = $scope;
        this.item = $scope.item;
        this.column = $scope.column;
        this.keyUpEvent = $scope.keyUpEvent;
    }
    vCellEditorController.prototype.fireKeyUpEvent = function (args, item) {
        this.keyUpEvent()(args, item);
    };
    ;
    vCellEditorController.$inject = ['$scope'];
    return vCellEditorController;
})();
module.exports = vCellEditorController;
