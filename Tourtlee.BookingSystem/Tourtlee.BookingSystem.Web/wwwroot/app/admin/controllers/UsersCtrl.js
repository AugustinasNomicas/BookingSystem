/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var UsersCtrl = (function () {
    function UsersCtrl($scope, usersResource, toastr) {
        this.$scope = $scope;
        this.usersResource = usersResource;
        this.toastr = toastr;
    }
    UsersCtrl.$inject = ["$scope", "usersResource", "toastr"];
    return UsersCtrl;
})();
module.exports = UsersCtrl;
