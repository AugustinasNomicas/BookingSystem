/// <reference path="../../../../typings/tsd.d.ts" />
'use strict';

class organizationCtrl {
    test: string
    modal: any

    static $inject: string[] = ['$scope'];

    constructor(public $scope: angular.IScope) {
        this.test = "organizations controller";

        $scope.modal = {
            "title": "Title",
            "content": "Hello Modal<br />This is a multiline message!"
        };
    }

}

export = organizationCtrl;