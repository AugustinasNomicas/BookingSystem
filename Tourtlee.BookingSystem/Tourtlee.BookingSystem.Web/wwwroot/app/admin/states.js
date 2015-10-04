/// <reference path="../../../typings/tsd.d.ts" />
"use strict";
var States = (function () {
    function States($stateProvider, $urlRouterProvider, $locationProvider) {
        this.$stateProvider = $stateProvider;
        this.$urlRouterProvider = $urlRouterProvider;
        $locationProvider.html5Mode(false);
        this.init();
    }
    States.prototype.init = function () {
        this.$stateProvider.state("main", States.defaultState());
        this.$stateProvider.state("organizations", States.organizations());
        this.$stateProvider.state("users", States.users());
        this.$urlRouterProvider.otherwise("/");
    };
    States.defaultState = function () {
        return {
            url: "/",
            templateUrl: "/app/admin/views/main.html"
        };
    };
    States.organizations = function () {
        return {
            url: "/organizations",
            templateUrl: "/app/admin/views/organizations.html"
        };
    };
    States.users = function () {
        return {
            url: "/users",
            templateUrl: "/app/admin/views/users.html"
        };
    };
    return States;
})();
module.exports = States;
