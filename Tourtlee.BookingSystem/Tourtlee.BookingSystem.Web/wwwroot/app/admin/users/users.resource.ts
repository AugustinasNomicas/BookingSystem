/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../shared/interfaces/icrudresource.ts" />
/// <reference path="dto/userlistitemdto.ts" />
"use strict";

import {CreateUserDto} from "./dto/CreateUserDto";
import {UserListItemDto} from "./dto/UserListItemDto";

export class UsersResource {
    static $inject: string[] = ["$http", "$window"];

    apiUrl: string;

    constructor(private $http: angular.IHttpService, private $window: angular.IWindowService) {
        this.apiUrl = $window["usersConfig"]["apiUrl"] + '/';
    }

    delete = (id: string): angular.IHttpPromise<void> => {
        return this.$http<void>({ url: this.apiUrl + `delete/${id}`, method: "Get" });
    };

    get = (id: string): angular.IHttpPromise<UserListItemDto> => {
        return this.$http<UserListItemDto>({ url: this.apiUrl + `${id}`, method: "Get" });
    };

    getList = (): angular.IHttpPromise<UserListItemDto[]> => {
        return this.$http<UserListItemDto[]>({ url: this.apiUrl, method: "Get" });
    };

    create = (item: CreateUserDto): angular.IHttpPromise<CreateUserDto> => {
        return this.$http<CreateUserDto>({ url: this.apiUrl + `create`, method: "Post", data: item });
    };

    update = (item: UserListItemDto): angular.IHttpPromise<UserListItemDto> => {
        return this.$http<UserListItemDto>({ url: this.apiUrl + `update`, method: "Put", data: item });
    };
}

