/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var usersController = (function () {
    function usersController($scope) {
        this.$scope = $scope;
        this.vm = this;
    }
    usersController.$inject = ["$scope"];
    return usersController;
})();
module.exports = usersController;
