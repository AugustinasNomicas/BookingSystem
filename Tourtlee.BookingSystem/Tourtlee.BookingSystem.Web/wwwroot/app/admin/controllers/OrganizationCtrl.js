/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var OrganizationCtrl = (function () {
    function OrganizationCtrl($scope) {
        this.$scope = $scope;
    }
    OrganizationCtrl.$inject = ["$scope", "toastr"];
    return OrganizationCtrl;
})();
module.exports = OrganizationCtrl;
