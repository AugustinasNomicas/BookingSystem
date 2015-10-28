/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/createuserdto.ts" />
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
    usersCreateController.prototype.onOrganizationModeChange = function () {
        if (this.createUser.organizationMode == 0
            && !this.organizations) {
            this.loadOrganizations();
        }
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
