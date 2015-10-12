/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../dto/createuserdto.ts" />
/// <reference path="../dto/userlistdto.ts" />
"use strict";
var usersService = (function () {
    function usersService(usersResource, notificationService) {
        this.usersResource = usersResource;
        this.notificationService = notificationService;
    }
    usersService.prototype.load = function () {
        var _this = this;
        this.usersResource.getList().success(function (data) {
            _this.userList = data;
        }).error(function () {
            _this.notificationService.error("Couldn't load users");
        });
    };
    usersService.prototype.create = function (user) {
        var _this = this;
        this.usersResource.post(user).success(function () {
            _this.notificationService.successUpdate();
        }).error(function () {
            _this.notificationService.errorUpdate("Failed to add user");
        });
        this.load();
    };
    usersService.prototype.delete = function (id) {
    };
    usersService.prototype.get = function (id) {
        return null;
    };
    usersService.prototype.getList = function () {
        return this.userList;
    };
    usersService.prototype.post = function (item) {
        var _this = this;
        var promise = this.usersResource.post(item);
        promise.error(function () {
            _this.notificationService.errorUpdate("Failed to update");
        }).success(function () {
            _this.notificationService.successUpdate();
        });
    };
    usersService.$inject = ["usersResource", "notificationService"];
    return usersService;
})();
module.exports = usersService;
