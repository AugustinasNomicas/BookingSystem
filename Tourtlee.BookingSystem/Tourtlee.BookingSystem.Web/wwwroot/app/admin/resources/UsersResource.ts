/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../dto/userlistitemdto.ts" />

"use strict";
class UsersResource {
    static $inject: string[] = ["$http"];

    constructor(private $http: angular.IHttpService) {
    }

    getList = (): angular.IHttpPromise<UserListItemDto[]> => {
        return this.$http<UserListItemDto[]>({ url: `api/admin/users`, method: "Get" });
    };
}

export = UsersResource;    

