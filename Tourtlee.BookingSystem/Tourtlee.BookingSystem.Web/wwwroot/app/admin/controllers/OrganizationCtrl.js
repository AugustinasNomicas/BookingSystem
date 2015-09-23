/// <reference path="../../../../typings/tsd.d.ts" />
'use strict';
var organizationCtrl = (function () {
    function organizationCtrl($scope, organizationsResource, toastr) {
        this.$scope = $scope;
        this.organizationsResource = organizationsResource;
        this.toastr = toastr;
        var ctrl = this;
        organizationsResource.getList().then(function (result) {
            ctrl.organizations = result.data;
            //toastr.success('Hello world!', 'Toastr fun!');
        });
    }
    organizationCtrl.$inject = ['$scope', 'organizationsResource', 'toastr'];
    return organizationCtrl;
})();
module.exports = organizationCtrl;
