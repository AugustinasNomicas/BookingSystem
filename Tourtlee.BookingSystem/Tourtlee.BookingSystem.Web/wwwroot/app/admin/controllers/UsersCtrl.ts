/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../dto/createuserdto.ts" />

"use strict";

import UsersService = require("../services/usersservice");

class UsersCtrl {
    static $inject: string[] = ["$scope", "usersService", "toastr"];

    createUserDto: CreateUserDto;
    organizationMode: number;

    constructor(public $scope: angular.IScope,
        private usersService: UsersService) {

        this.organizationMode = 1
    }

    CreateUser(): void {
        alert("Creating user");
        console.log(this.createUserDto);
    }
}

export = UsersCtrl;