/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/userlistitemdto.ts" />
"use strict";
var usersController = (function () {
    function usersController($scope, $window, $translate) {
        this.$scope = $scope;
        this.$window = $window;
        this.$translate = $translate;
        this.vm = this;
        this.usersList = $window["usersConfig"]["usersList"];
    }
    usersController.$inject = ["$scope", "$window", '$translate'];
    return usersController;
})();
module.exports = usersController;
