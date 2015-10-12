/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../dto/createuserdto.ts" />
/// <reference path="../dto/userlistdto.ts" />
"use strict";
var UsersService = (function () {
    function UsersService(usersResource, notificationService) {
        this.usersResource = usersResource;
        this.notificationService = notificationService;
    }
    UsersService.prototype.load = function () {
        var _this = this;
        this.usersResource.getList().success(function (data) {
            _this.userList = data;
        }).error(function () {
            _this.notificationService.error("Couldn't load users");
        });
    };
    UsersService.prototype.create = function (user) {
        var _this = this;
        this.usersResource.post(user).success(function () {
            _this.notificationService.successUpdate();
        }).error(function () {
            _this.notificationService.errorUpdate("Failed to add user");
        });
        this.load();
    };
    UsersService.$inject = ["usersResource", "notificationService"];
    return UsersService;
})();
module.exports = UsersService;
