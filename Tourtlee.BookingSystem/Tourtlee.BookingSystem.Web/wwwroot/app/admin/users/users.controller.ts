/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";

class usersController {
    static $inject: string[] = ["$scope"];
    vm = this;
    constructor(public $scope: angular.IScope) {
    }

}

export = usersController;