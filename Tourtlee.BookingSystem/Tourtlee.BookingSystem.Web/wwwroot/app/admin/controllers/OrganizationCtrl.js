/// <reference path="../../../../typings/tsd.d.ts" />
'use strict';
var organizationCtrl = (function () {
    function organizationCtrl($scope) {
        this.$scope = $scope;
        this.test = "organizations controller";
        $scope.modal = {
            "title": "Title",
            "content": "Hello Modal<br />This is a multiline message!"
        };
    }
    organizationCtrl.$inject = ['$scope'];
    return organizationCtrl;
})();
module.exports = organizationCtrl;
