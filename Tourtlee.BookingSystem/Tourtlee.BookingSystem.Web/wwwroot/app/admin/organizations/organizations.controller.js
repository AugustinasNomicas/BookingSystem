/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var organizationsController = (function () {
    function organizationsController($scope) {
        this.$scope = $scope;
        this.vm = this;
    }
    organizationsController.$inject = ["$scope"];
    return organizationsController;
})();
module.exports = organizationsController;