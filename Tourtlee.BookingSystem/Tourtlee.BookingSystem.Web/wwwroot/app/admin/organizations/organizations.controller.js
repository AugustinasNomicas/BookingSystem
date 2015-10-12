/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var OrganizationsController = (function () {
    function OrganizationsController($scope) {
        this.$scope = $scope;
        this.vm = this;
    }
    OrganizationsController.$inject = ["$scope", "toastr"];
    return OrganizationsController;
})();
module.exports = OrganizationsController;
