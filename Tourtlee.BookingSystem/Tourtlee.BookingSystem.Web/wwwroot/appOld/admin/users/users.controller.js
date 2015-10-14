/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/createuserdto.ts" />
"use strict";
var UsersController = (function () {
    function UsersController($scope, usersService) {
        this.$scope = $scope;
        this.usersService = usersService;
        this.organizationMode = 1;
    }
    UsersController.prototype.CreateUser = function () {
        alert("Creating user");
        console.log(this.createUserDto);
    };
    UsersController.$inject = ["$scope", "usersService", "toastr"];
    return UsersController;
})();
module.exports = UsersController;
