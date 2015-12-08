/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var OrganizationsController = (function () {
    function OrganizationsController($scope, $window) {
        this.$scope = $scope;
        this.$window = $window;
        this.organizationsList = $window["organizationsConfig"]["organizationsList"];
    }
    OrganizationsController.$inject = ["$scope", "$window"];
    return OrganizationsController;
})();
exports.OrganizationsController = OrganizationsController;
