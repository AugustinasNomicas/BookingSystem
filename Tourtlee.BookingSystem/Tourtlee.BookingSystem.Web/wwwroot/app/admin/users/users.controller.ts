/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/createuserdto.ts" />


"use strict";

import usersService = require("./users.service");

class UsersController {
    static $inject: string[] = ["$scope", "usersService", "toastr"];

    createUserDto: CreateUserDto;
    organizationMode: number;

    constructor(public $scope: angular.IScope,
        private usersService: usersService) {

        this.organizationMode = 1
    }

    CreateUser(): void {
        alert("Creating user");
        console.log(this.createUserDto);
    }
}

export = UsersController;