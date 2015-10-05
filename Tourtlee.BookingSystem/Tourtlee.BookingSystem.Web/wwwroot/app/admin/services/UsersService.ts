/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../dto/createuserdto.ts" />
/// <reference path="../dto/userlistdto.ts" />

"use strict";

import UsersResource = require("../resources/UsersResource");
import notificationService = require("../../shared/services/notificationservice");

class UsersService {
    static $inject: string[] = ["usersResource", "toastr"];

    UserList: UserListItemDto[];

    constructor(public $scope: angular.IScope,
        public usersResource: UsersResource,
        private notificationService: notificationService) {
    }

    Load() {
        this.usersResource.getList().success((data) => {
            this.UserList = data;
        }).error(() => {
            this.notificationService.error("Couldn't load users");
        });
    }

    Create(user: CreateUserDto) {
        this.usersResource.post(user).success(() => {
            this.notificationService.successUpdate();
        }).error(() => {
            this.notificationService.errorUpdate("Failed to add user");
        });

        this.Load();
    }
}

export = UsersService;