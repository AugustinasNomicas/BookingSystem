/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../dto/createuserdto.ts" />
/// <reference path="../dto/userlistdto.ts" />

"use strict";

import UsersResource = require("../resources/UsersResource");
import notificationService = require("../../shared/services/notificationservice");

class UsersService implements ICrudService<UserListItemDto>  {
    static $inject: string[] = ["usersResource", "notificationService"];

    userList: UserListItemDto[];

    constructor(private usersResource: UsersResource,
        private notificationService: notificationService) {
    }

    load() {
        this.usersResource.getList().success((data) => {
            this.userList = data;
        }).error(() => {
            this.notificationService.error("Couldn't load users");
        });
    }

    create(user: CreateUserDto) {
        this.usersResource.post(user).success(() => {
            this.notificationService.successUpdate();
        }).error(() => {
            this.notificationService.errorUpdate("Failed to add user");
        });

        this.load();
    }
}

export = UsersService;