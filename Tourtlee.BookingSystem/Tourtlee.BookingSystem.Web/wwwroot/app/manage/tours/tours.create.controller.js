/// <reference path="../../../../typings/tsd.d.ts" />
var editUserDto = require("./dto/editUserDto");
"use strict";
var tourseditController = (function () {
    function tourseditController($scope, $window, toursResource, organizationsResource, notificationService, $templateCache) {
        this.$scope = $scope;
        this.$window = $window;
        this.toursResource = toursResource;
        this.organizationsResource = organizationsResource;
        this.notificationService = notificationService;
        this.$templateCache = $templateCache;
        this.vm = this;
        this.editUser = $window["toursConfig"]["editUser"];
        this.editUser.organizationMode = editUserDto.editUserOrganizatioModes.Existing;
        this.loadOrganizations();
    }
    tourseditController.prototype.submit = function () {
        var _this = this;
        if (!this.$scope.editUserForm.$valid)
            return;
        this.toursResource.edit(this.editUser).then(function (result) {
            _this.editUser = result.data;
            _this.notificationService.success("usereditd");
        }, function (error) {
            _this.notificationService.error(error.data);
        });
    };
    tourseditController.prototype.loadOrganizations = function () {
        var _this = this;
        this.organizationsResource.getList().then(function (result) {
            _this.organizations = result.data;
        });
    };
    tourseditController.$inject = ["$scope", "$window", "toursResource", "organizationsResource",
        "notificationService", "$templateCache"];
    return tourseditController;
})();
module.exports = tourseditController;
