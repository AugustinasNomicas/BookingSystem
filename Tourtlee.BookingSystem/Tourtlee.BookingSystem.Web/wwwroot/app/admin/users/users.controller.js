/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/userlistitemdto.ts" />
"use strict";
var UsersController = (function () {
    function UsersController($scope, $window, $translate) {
        this.$scope = $scope;
        this.$window = $window;
        this.$translate = $translate;
        this.vm = this;
        this.usersList = $window["usersConfig"]["usersList"];
    }
    UsersController.$inject = ["$scope", "$window", '$translate'];
    return UsersController;
})();
exports.UsersController = UsersController;
