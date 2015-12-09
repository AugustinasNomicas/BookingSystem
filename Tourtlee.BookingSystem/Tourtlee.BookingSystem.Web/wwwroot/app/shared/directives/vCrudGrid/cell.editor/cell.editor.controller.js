/// <reference path="../../../../../../typings/tsd.d.ts" />
'use strict';
var CellEditorController = (function () {
    function CellEditorController($scope) {
        this.$scope = $scope;
        this.item = $scope.item;
        this.column = $scope.column;
        this.keyUpEvent = $scope.keyUpEvent;
    }
    CellEditorController.prototype.fireKeyUpEvent = function (args, item) {
        this.keyUpEvent()(args, item);
    };
    ;
    CellEditorController.$inject = ['$scope'];
    return CellEditorController;
})();
exports.CellEditorController = CellEditorController;
