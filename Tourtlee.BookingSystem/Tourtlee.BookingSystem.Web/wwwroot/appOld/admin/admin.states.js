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
        this.$stateProvider.state("users", {
            url: "/users",
            templateUrl: "/app/admin/users/users.html",
            abstract: true
        });
        this.$stateProvider.state("users.list", {
            url: "",
            templateUrl: "/app/admin/users/users.list.html"
        });
        this.$stateProvider.state("users.add", {
            url: "/add",
            templateUrl: "/app/admin/users/users.add.html"
        });
        this.$urlRouterProvider.otherwise("/");
    };
    States.defaultState = function () {
        return {
            url: "/",
            templateUrl: "/app/admin/main.html"
        };
    };
    States.organizations = function () {
        return {
            url: "/organizations",
            templateUrl: "/app/admin/organizations/organizations.list.html"
        };
    };
    return States;
})();
module.exports = States;
