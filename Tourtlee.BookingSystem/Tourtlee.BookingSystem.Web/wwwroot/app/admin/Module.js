/// <reference path="../../../typings/tsd.d.ts" />
var OrganizationCtrl = require("admin/controllers/organizationCtrl");
var States = require("admin/states");
var vSample = require("../shared/directives/vSample");
var vAdminMenu = require("admin/directives/vAdminMenu");
var organizationResource = require("admin/resources/organizationsResource");
var Admin;
(function (Admin) {
    'use strict';
    var app = angular.module('admin', ['ui.router', 'mgcrea.ngStrap'])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        return new States($stateProvider, $urlRouterProvider, $locationProvider);
    });
    app.directive("vSample", vSample.factory());
    app.directive("vAdminMenu", vAdminMenu.factory());
    app.controller("organizationCtrl", OrganizationCtrl);
    app.service("organizationsResource", organizationResource);
    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });
    angular.bootstrap(document, ['admin']);
})(Admin = exports.Admin || (exports.Admin = {}));
