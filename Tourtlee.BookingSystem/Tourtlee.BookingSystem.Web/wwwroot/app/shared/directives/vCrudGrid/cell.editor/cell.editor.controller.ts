/// <reference path="../../../../../../typings/tsd.d.ts" />
'use strict';

export class CellEditorController {
    item: Object;
    column: Object;
    keyUpEvent: any;

    static $inject: string[] = ['$scope'];

    constructor(public $scope: any) {
        this.item = $scope.item;
        this.column = $scope.column;
        this.keyUpEvent = $scope.keyUpEvent;
    }

    public fireKeyUpEvent(args, item) {
        this.keyUpEvent()(args, item);
    };
}

