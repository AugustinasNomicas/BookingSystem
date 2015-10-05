/// <reference path="../../../../typings/tsd.d.ts" />
'use strict';
var OrganizationCtrl = (function () {
    function OrganizationCtrl($scope, organizationsResource, toastr) {
        this.$scope = $scope;
        this.organizationsResource = organizationsResource;
        this.toastr = toastr;
        var ctrl = this;
        organizationsResource.getList().then(function (result) {
            ctrl.organizations = result.data;
            //toastr.success('Hello world!', 'Toastr fun!');
        });
    }
    OrganizationCtrl.$inject = ['$scope', 'organizationsResource', 'toastr'];
    return OrganizationCtrl;
})();
module.exports = OrganizationCtrl;
