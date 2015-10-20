/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/userlistitemdto.ts" />
"use strict";
var usersController = (function () {
    function usersController($scope, $window) {
        this.$scope = $scope;
        this.$window = $window;
        this.vm = this;
        this.usersList = $window["usersConfig"]["usersList"];
    }
    usersController.$inject = ["$scope", "$window"];
    return usersController;
})();
module.exports = usersController;
