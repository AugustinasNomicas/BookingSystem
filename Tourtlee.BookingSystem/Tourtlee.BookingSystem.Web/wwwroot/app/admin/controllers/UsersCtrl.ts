/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";

import UsersResource = require("../resources/UsersResource");

class UsersCtrl {
    static $inject: string[] = ["$scope", "usersResource", "toastr"];

    constructor(public $scope: angular.IScope,
        public usersResource: UsersResource,
        public toastr: any) {
    }

}

export = UsersCtrl;