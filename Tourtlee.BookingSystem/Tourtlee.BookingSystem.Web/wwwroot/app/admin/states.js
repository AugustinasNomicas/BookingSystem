/// <reference path="../../../typings/tsd.d.ts" />
'use strict';
var States = (function () {
    function States($stateProvider, $urlRouterProvider, $locationProvider) {
        this.$stateProvider = $stateProvider;
        this.$urlRouterProvider = $urlRouterProvider;
        $locationProvider.html5Mode(true);
        this.init();
    }
    States.prototype.init = function () {
        this.$stateProvider.state("main", States.defaultState());
        this.$stateProvider.state("organizations", States.organizations());
        this.$urlRouterProvider.otherwise('/Admin/main');
    };
    States.defaultState = function () {
        return {
            url: "/Admin/main",
            template: "<h1>hello</h1>"
        };
    };
    States.organizations = function () {
        return {
            url: "/Admin/organizations",
            templateUrl: "/app/admin/views/organizations.html"
        };
    };
    return States;
})();
module.exports = States;
