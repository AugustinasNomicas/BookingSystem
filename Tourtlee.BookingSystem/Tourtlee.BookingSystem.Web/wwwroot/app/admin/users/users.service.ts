/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/userlistitemdto.ts" />
/// <reference path="dto/createuserdto.ts" />

"use strict";

import usersResource = require("./users.resource");
import notificationService = require("../../shared/services/notificationservice");

class usersService  {
    static $inject: string[] = ["usersResource", "notificationService"];

    userList: UserListItemDto[];

    constructor(private usersResource: usersResource,
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

    delete(id: string): void {
    }

    get(id: string): UserListItemDto {
        return null;
    }

    getList(): UserListItemDto[] {
        return this.userList
    }

    post(item: CreateUserDto): void {
        const promise = this.usersResource.post(item);
        promise.error(() => {
            this.notificationService.errorUpdate("Failed to update");
        }).success(() => {
            this.notificationService.successUpdate();
        });
    }

}

export = usersService;