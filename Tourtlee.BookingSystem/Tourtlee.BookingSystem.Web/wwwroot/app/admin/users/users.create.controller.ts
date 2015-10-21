/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/createuserdto.ts" />

"use strict";

class usersCreateController {
    static $inject: string[] = ["$scope", "$window"];
    vm = this;
    public createUser: CreateUserDto;

    constructor(public $scope: angular.IScope, private $window: angular.IWindowService) {
        this.createUser = $window["usersConfig"]["createUser"];
    }

}

export = usersCreateController;