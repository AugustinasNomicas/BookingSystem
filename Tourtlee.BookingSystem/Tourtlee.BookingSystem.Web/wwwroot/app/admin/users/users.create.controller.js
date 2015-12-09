/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var CreateUserDto_1 = require("./dto/CreateUserDto");
var UsersCreateController = (function () {
    function UsersCreateController($scope, $window, usersResource, organizationsResource, notificationService, $templateCache) {
        this.$scope = $scope;
        this.$window = $window;
        this.usersResource = usersResource;
        this.organizationsResource = organizationsResource;
        this.notificationService = notificationService;
        this.$templateCache = $templateCache;
        this.createUser = $window["usersConfig"]["createUser"];
        this.createUser.organizationMode = CreateUserDto_1.CreateUserOrganizationModes.Existing;
        this.loadOrganizations();
    }
    UsersCreateController.prototype.submit = function () {
        var _this = this;
        if (!this.$scope.createUserForm.$valid)
            return;
        this.usersResource.create(this.createUser).then(function (result) {
            _this.createUser = result.data;
            _this.notificationService.success("userCreated");
            _this.$scope.createUserForm.$setPristine();
            _this.$window.location.href = "/Admin/Users";
        }, function (error) {
            _this.notificationService.error(error.data);
        });
    };
    UsersCreateController.prototype.loadOrganizations = function () {
        var _this = this;
        this.organizationsResource.getList().then(function (result) {
            _this.organizations = result.data;
        });
    };
    UsersCreateController.$inject = ["$scope", "$window", "UsersResource", "OrganizationsResource",
        "notificationService", "$templateCache"];
    return UsersCreateController;
})();
exports.UsersCreateController = UsersCreateController;
