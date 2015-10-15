﻿/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../shared/interfaces/icrudresource.ts" />
/// <reference path="dto/createuserdto.ts" />
/// <reference path="dto/userlistitemdto.ts" />

"use strict";
class usersResource {
    static $inject: string[] = ["$http"];

    apiUrl: string = 'Admin/UsersApi/';

    constructor(private $http: angular.IHttpService) {
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

    create = (item: CreateUserDto): angular.IHttpPromise<UserListItemDto> => {
        return this.$http<UserListItemDto>({ url: this.apiUrl + `create`, method: "Post", data: item });
    };

    update = (item: UserListItemDto): angular.IHttpPromise<UserListItemDto> => {
        return this.$http<UserListItemDto>({ url: this.apiUrl + `update`, method: "Put", data: item });
    };
}

export = usersResource;    
