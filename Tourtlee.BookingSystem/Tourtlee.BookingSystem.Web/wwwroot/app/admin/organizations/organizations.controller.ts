/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";

class organizationsController {
    static $inject: string[] = ["$scope", "toastr"];
    vm = this;
    constructor(public $scope: angular.IScope) {
    }

}

export = organizationsController;