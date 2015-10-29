/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/createuserdto.ts" />
var createUserDto = require("./dto/createUserDto");
"use strict";
var usersCreateController = (function () {
    function usersCreateController($scope, $window, usersResource, organizationsResource, notificationService) {
        this.$scope = $scope;
        this.$window = $window;
        this.usersResource = usersResource;
        this.organizationsResource = organizationsResource;
        this.notificationService = notificationService;
        this.vm = this;
        this.createUser = $window["usersConfig"]["createUser"];
        this.createUser.organizationMode = createUserDto.CreateUserOrganizatioModes.Existing;
        this.loadOrganizations();
    }
    usersCreateController.prototype.submit = function () {
        var _this = this;
        if (!this.$scope.createUserForm.$valid)
            return;
        this.usersResource.create(this.createUser).then(function (result) {
            _this.createUser = result.data;
            _this.notificationService.success("userCreated");
        }, function (error) {
            _this.notificationService.error(error.data);
        });
    };
    usersCreateController.prototype.loadOrganizations = function () {
        var _this = this;
        this.organizationsResource.getList().then(function (result) {
            _this.organizations = result.data;
        });
    };
    usersCreateController.$inject = ["$scope", "$window", "usersResource", "organizationsResource", "notificationService"];
    return usersCreateController;
})();
module.exports = usersCreateController;
