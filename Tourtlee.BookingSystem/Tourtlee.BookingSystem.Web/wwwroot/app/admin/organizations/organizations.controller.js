/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var organizationsController = (function () {
    function organizationsController($scope, $window) {
        this.$scope = $scope;
        this.$window = $window;
        this.organizationsList = $window["organizationsList"];
    }
    organizationsController.$inject = ["$scope", "$window"];
    return organizationsController;
})();
module.exports = organizationsController;
