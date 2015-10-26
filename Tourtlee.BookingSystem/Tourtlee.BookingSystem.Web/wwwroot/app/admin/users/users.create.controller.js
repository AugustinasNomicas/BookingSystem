"use strict";
var usersCreateController = (function () {
    function usersCreateController($scope, $window, usersResource, organizationsResource) {
        this.$scope = $scope;
        this.$window = $window;
        this.usersResource = usersResource;
        this.organizationsResource = organizationsResource;
        this.vm = this;
        this.createUser = $window["usersConfig"]["createUser"];
    }
    usersCreateController.prototype.submit = function () {
        this.usersResource.create(this.createUser);
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
    usersCreateController.$inject = ["$scope", "$window", "usersResource", "organizationsResource"];
    return usersCreateController;
})();
module.exports = usersCreateController;
