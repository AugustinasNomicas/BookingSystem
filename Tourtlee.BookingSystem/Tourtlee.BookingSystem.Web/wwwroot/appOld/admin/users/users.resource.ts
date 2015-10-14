/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/userlistitemdto.ts" />
/// <reference path="dto/createuserdto.ts" />


"use strict";
class usersResource {
    static $inject: string[] = ["$http"];

    constructor(private $http: angular.IHttpService) {
    }

    getList = (): angular.IHttpPromise<UserListItemDto[]> => {
        return this.$http<UserListItemDto[]>({ url: `api/admin/users`, method: "Get" });
    };

    post = (item: CreateUserDto): angular.IHttpPromise<void> => {
        return this.$http<void>({ url: `api/admin/users`, method: "Post", data: item });
    };
}

export = usersResource;    

