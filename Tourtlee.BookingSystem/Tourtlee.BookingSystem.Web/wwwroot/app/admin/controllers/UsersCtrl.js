/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../dto/createuserdto.ts" />
"use strict";
var UsersCtrl = (function () {
    function UsersCtrl($scope, usersService) {
        this.$scope = $scope;
        this.usersService = usersService;
        this.organizationMode = 1;
    }
    UsersCtrl.prototype.CreateUser = function () {
        alert("Creating user");
        console.log(this.createUserDto);
    };
    UsersCtrl.$inject = ["$scope", "usersService", "toastr"];
    return UsersCtrl;
})();
module.exports = UsersCtrl;
