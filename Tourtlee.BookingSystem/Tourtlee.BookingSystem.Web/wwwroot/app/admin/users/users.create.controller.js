/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/createuserdto.ts" />
"use strict";
var usersCreateController = (function () {
    function usersCreateController($scope, $window) {
        this.$scope = $scope;
        this.$window = $window;
        this.vm = this;
        this.createUser = $window["usersConfig"]["createUser"];
    }
    usersCreateController.$inject = ["$scope", "$window"];
    return usersCreateController;
})();
module.exports = usersCreateController;
