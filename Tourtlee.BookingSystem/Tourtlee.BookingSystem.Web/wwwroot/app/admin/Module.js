var States = require("admin/states");
var Admin;
(function (Admin) {
    'use strict';
    angular.module('admin', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        return new States($stateProvider, $urlRouterProvider, $locationProvider);
    });
    angular.bootstrap(document, ['admin']);
})(Admin = exports.Admin || (exports.Admin = {}));
