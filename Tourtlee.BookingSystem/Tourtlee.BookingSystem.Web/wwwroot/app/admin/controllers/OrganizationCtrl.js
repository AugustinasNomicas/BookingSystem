/// <reference path="../../../../typings/tsd.d.ts" />
'use strict';
var organizationCtrl = (function () {
    function organizationCtrl($scope, organizationsResource) {
        this.$scope = $scope;
        this.organizationsResource = organizationsResource;
        var ctrl = this;
        organizationsResource.getList().then(function (result) {
            ctrl.organizations = result.data;
        });
    }
    organizationCtrl.$inject = ['$scope', 'organizationsResource'];
    return organizationCtrl;
})();
module.exports = organizationCtrl;
