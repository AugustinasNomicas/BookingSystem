/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../dto/createuserdto.ts" />
/// <reference path="../dto/userlistdto.ts" />
"use strict";
var UsersService = (function () {
    function UsersService($scope, usersResource, notificationService) {
        this.$scope = $scope;
        this.usersResource = usersResource;
        this.notificationService = notificationService;
    }
    UsersService.prototype.Load = function () {
        var _this = this;
        this.usersResource.getList().success(function (data) {
            _this.UserList = data;
        }).error(function () {
            _this.notificationService.error("Couldn't load users");
        });
    };
    UsersService.prototype.Create = function (user) {
        var _this = this;
        this.usersResource.post(user).success(function () {
            _this.notificationService.successUpdate();
        }).error(function () {
            _this.notificationService.errorUpdate("Failed to add user");
        });
        this.Load();
    };
    UsersService.$inject = ["usersResource", "toastr"];
    return UsersService;
})();
module.exports = UsersService;
